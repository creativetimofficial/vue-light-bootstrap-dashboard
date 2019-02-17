# Typography

Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.


#### Headings

All HTML headings, `<h1>` through `<h6>`, are available.

:::demo
```html
<div>
  <h1>h1. Bootstrap heading</h1>
  <h2>h2. Bootstrap heading</h2>
  <h3>h3. Bootstrap heading</h3>
  <h4>h4. Bootstrap heading</h4>
  <h5>h5. Bootstrap heading</h5>
  <h6>h6. Bootstrap heading</h6>
</div>
```
:::

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

:::demo
```html
<div>
  <p class="h1">h1. Bootstrap heading</p>
  <p class="h2">h2. Bootstrap heading</p>
  <p class="h3">h3. Bootstrap heading</p>
  <p class="h4">h4. Bootstrap heading</p>
  <p class="h5">h5. Bootstrap heading</p>
  <p class="h6">h6. Bootstrap heading</p>
</div>
```
:::

`.title`, for when you want some bolder titles with a different font family.

:::demo
```html
<div>
  <h1 class="title">h1. Bootstrap heading</h1>
  <h2 class="title">h2. Bootstrap heading</h2>
  <h3 class="title">h3. Bootstrap heading</h3>
  <h4 class="title">h4. Bootstrap heading</h4>
  <h5 class="title">h5. Bootstrap heading</h5>
  <h6 class="title">h6. Bootstrap heading</h6>
</div>
```
:::


#### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.

:::demo
```html
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
```
:::

#### Blockquotes

For quoting blocks of content from another source within your document.
Wrap `<blockquote class="blockquote">` around any HTML as the quote.

:::demo
```html
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```
:::

#### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source.
Wrap the name of the source work in `<cite>`.

:::demo
```html
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```
:::

#### Alignment

Use text utilities as needed to change the alignment of your blockquote.

:::demo
```html
<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```
:::

:::demo
```html
<blockquote class="blockquote text-right">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```
:::
