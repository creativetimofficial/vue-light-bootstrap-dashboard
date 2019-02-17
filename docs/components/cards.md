# Cards

Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.

<hr>  

#### Examples

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.

:::demo
```html
<card style="width: 20rem;">
   <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f6b99d2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f6b99d2%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
   <h4 class="card-title">Card title</h4>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</card>
```
:::

#### Content types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

#### Body 

The building block of a card is the default `slot`. Just put content in the `<card>` component
and it will be wrapped in a div with `.card-body` class.
Use it whenever you need a padded section within a card.

:::demo
```html
<card>
  This is some text within a card body.
</card>
```
:::


#### Titles, text, and links

Card titles are used by passing `title` prop or by using the `slot="header"` or
by using the `.card-title` class.
Links are added and placed next to each other by adding .card-link to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag.
If the `.card-title` and the `.card-subtitle` items are placed in a 
`default slot (card body)` item, the card title and subtitle are aligned nicely.

:::demo
```html
<card style="width: 20rem;">
    <h4 class="card-title">Card title</h4>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
</card>
```
:::

#### Images

`.card-img-top` along with `slot="image"` places an image to the top of the card.
With `.card-text`, text can be added to the card.
Text within `.card-text` can also be styled with the standard HTML tags.

:::demo
```html
<card class="card" style="width: 20rem;">
  <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f761b63%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f761b63%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.203125%22%20y%3D%2297.35%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</card>
```
:::

#### List groups

Create lists of content in a card with a flush list group.
You have to use the `slot="raw-content"` to avoid padding for the list group items

:::demo
```html
<card style="width: 20rem;">
  <ul slot="raw-content" class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
```
:::

#### Header and footer

Add an optional header and/or footer within a card with the help of `footer` and `header` slots.

:::demo
```html
<card>
  <span slot="header">
    Featured
  </span>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</card>
```
:::


#### Quote card

:::demo
```html
<card type="nav-tabs">
  <div slot="header" class="card-header-success">
    Quote
  </div>
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</card>
```
:::


#### Center aligned

:::demo
```html
<card type="nav-tabs" class="text-center">
  <div slot="header" class="card-header-primary">
    Featured
  </div>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
  <div slot="footer" class="text-muted">
    2 days ago
  </div>
</card>
```
:::


#### Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with our text align classes.

:::demo
```html
<div>
  <card style="width: 20rem;">
      <h4 class="card-title">Special title treatment</h4>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </card>
  
  <card class="text-center" style="width: 20rem;">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
  </card>
  <card class="text-right" style="width: 20rem;">
          <h4 class="card-title">Special title treatment</h4>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
    </card>
</div>
```
:::


#### Image caps

Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.

:::demo
```html
<div>
  <card class="mb-3">
    <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f78c26b%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f78c26b%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card>
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <img slot="image-bottom" class="card-img-bottom" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f78c26b%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f78c26b%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
  </card>
</div>
```
:::

#### Image overlays

Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.

:::demo
```html
<div class="card bg-dark text-white">
  <img class="card-img" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f89c2e0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f89c2e0%22%3E%3Crect%20width%3D%22843%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22154.35%22%3E843x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
```
:::
