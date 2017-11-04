<template>
  <div
    class="demo-block"
    :class="{ 'hover': hovering }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta">
      <div class="description" v-if="desc">
        <div v-html="desc"></div>
      </div>
      <div class="highlight" v-html='codePrismed'></div>
    </div>
    <div class="demo-block-control"
         ref="control"
         @click="isExpanded = !isExpanded">
      <transition name="arrow-slide"></transition>
      <transition name="text-slide">
        <span>{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>


<script type="text/babel">
  import striptags from '../util/strip-tags'
  import Prism from 'prismjs'

  export default {
    name: 'demo-block',
    data () {
      return {
        hovering: false,
        isExpanded: false,
      }
    },

    props: {
      jsfiddle: {
        default () {
          return {}
        },
        type: Object
      },
      desc: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: ''
      },
      jsResources: {
        type: String,
        default: ''
      },
      cssResources: {
        type: String,
        default: ''
      },
      bootCode: {
        type: String,
        default: ''
      }
    },

    methods: {
      goJsfiddle () {
        const {script, html, style} = this.jsfiddle;
        let jsTpl = this.bootCode + '\n' + (script || '').replace(/export default/, 'var Main =').trim();
        let htmlTpl = `${this.jsResources}\n<div id="app">\n${html.trim()}\n</div>`;
        let cssTpl = `${this.cssResources}\n${(style || '').trim()}\n`;

        jsTpl = jsTpl
          ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
          : 'new Vue().$mount(\'#app\')';

        const data = {
          js: jsTpl,
          css: cssTpl,
          html: htmlTpl,
          panel_js: 3,
          panel_css: 1
        };
        const form = document.getElementById('fiddle-form') || document.createElement('form');
        form.innerHTML = '';
        const node = document.createElement('textarea');

        form.method = 'post';
        form.action = 'https://jsfiddle.net/api/post/library/pure/';
        form.target = '_blank';

        for (let name in data) {
          node.name = name;
          node.value = data[name].toString();
          form.appendChild(node.cloneNode());
        }
        form.setAttribute('id', 'fiddle-form');
        form.style.display = 'none';
        document.body.appendChild(form);

        form.submit();
      },
    },

    computed: {
      controlText () {
        return this.isExpanded ? 'Hide' : 'Expand';
      },

      codeArea () {
        return this.$el.getElementsByClassName('meta')[0];
      },

      codeAreaHeight () {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      },
      codePrismed () {
        var hl = Prism.highlight(striptags.strip(this.code, ['desc', 'lang', 'no-boot-code']).replace(/\/\*.*\*\/\s*/g, ''), Prism.languages[this.lang] || Prism.languages.markup)
        return '<pre v-pre data-lang="' + this.lang + '"><code class="lang-' + this.lang + '">' + hl + '</code></pre>'
      }
    },

    watch: {
      isExpanded (val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
      }
    },

    mounted () {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    }
  };
</script>


<style lang="scss">
  .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }
    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
    .demo-button {
      float: right;
    }
    .source {
      padding: 24px;
    }
    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      overflow: hidden;
      height: 0;
      transition: height .2s;
    }
    .description {
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      p {
        margin: 0;
        line-height: 26px;
      }
      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }
    .highlight {
      pre {
        margin: 0;
      }
      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        &::before {
          content: none;
        }
      }
    }
    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;

      &.is-fixed {
        position: fixed;
        bottom: 0;
        width: 868px;
      }
      i {
        font-size: 16px;
        line-height: 44px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }
      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        display: inline-block;
      }
      &:hover {
        color: #409EFF;
        background-color: #f9fafc;
      }
      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }

      .control-button {
        line-height: 26px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 25px;
      }
    }
  }
</style>
