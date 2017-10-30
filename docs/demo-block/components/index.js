var Vue = window.Vue
import striptags from '../util/strip-tags'
import DemoBlock from './demo-block'
import marked from 'marked'

export let install = function() {
  Vue.component(DemoBlock.name, DemoBlock)
}

export let generateComponent = function(code, lang, jsResources, cssResources, bootCode) {
  let html = striptags.fetch(code, 'template')
  let style = striptags.fetch(code, 'style')
  let script = striptags.fetch(code, 'script')
  let descOrg = striptags.fetch(code, 'desc')
  let desc = marked && marked(descOrg) || descOrg
  let noBootCode = code.indexOf('/*no-boot-code*/') > -1
  if (noBootCode) {
    bootCode = ""
  }

  let allJsResources = jsResources

  let extraJsMatchStrList = code.match(/\/\*\s*jsResource\s*(.*\S)\s*\*\//)
  if (!!extraJsMatchStrList) {
    let jsList = extraJsMatchStrList[1].split(' ')
    for(let js of jsList) {
      allJsResources += `\n<script src="${js}"></script>`
    }
  }

  let scripts = script.split('export default')
  let scriptStrOrg = `(function() {${scripts[0]} ; return ${scripts[1]}})()`
  let scriptStr = Babel && Babel.transform(scriptStrOrg, { presets: ['es2015'] }).code || scriptStrOrg
  let scriptObj = eval(scriptStr)

  scriptObj.template = html

  let jsfiddleStr = JSON.stringify({html, style, script})

  return {
    template: `
      <demo-block class="demo-box"
        :jsfiddle="jsfiddle"
        :code="code"
        :desc="desc"
        :lang="lang"
        :js-resources="allJsResources"
        :css-resources="cssResources"
        :boot-code="bootCode"
        :no-boot-code="noBootCode">
        <div class="source" slot="source">
          <my-code></my-code>
        </div>
      </demo-block/>
    `,

    components: {
      DemoBlock,
      MyCode: scriptObj
    },

    data() {
      return {
        jsfiddle: {html, style, script},
        code,
        desc,
        lang,
        allJsResources,
        cssResources,
        bootCode,
        noBootCode
      }
    }
  }
}
