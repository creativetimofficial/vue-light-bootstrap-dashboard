# Buttons

Use Black Dashboard's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

<hr>

#### Examples

Black Dashboard has changed the predefined button styles from Bootstrap, each serving its own semantic purpose, with a few extras thrown in for more control.


:::demo
```html
<div>
 <base-button type="primary">Primary</base-button>
 <base-button type="info">Info</base-button>
 <base-button type="success">Success</base-button>
 <base-button type="danger">Danger</base-button>
 <base-button type="warning">Warning</base-button>
 <base-button type="default">Default</base-button>
</div>
```
:::


#### Animation on hover

:::demo
```html
<div>
 <base-button class="animation-on-hover" type="primary">Primary</base-button>
 <base-button class="animation-on-hover" type="info">Info</base-button>
 <base-button class="animation-on-hover" type="success">Success</base-button>
 <base-button class="animation-on-hover" type="danger">Danger</base-button>
 <base-button class="animation-on-hover" type="warning">Warning</base-button>
 <base-button class="animation-on-hover" type="default">Default</base-button>
</div>
```
:::

#### Style buttons
:::demo
```html
<div>
 <base-button round type="primary">Primary</base-button>
 <base-button round type="primary">
    <i class="tim-icons icon-heart-2"></i> With Icon
 </base-button>
 <base-button round icon type="primary">
     <i class="tim-icons icon-heart-2"></i>
  </base-button>
  <base-button simple type="primary">Simple</base-button>
  <base-button link type="primary">Link</base-button>
  <base-button loading type="primary">Loading</base-button>
  <base-button block type="primary">Block</base-button>
</div>
```
:::


#### Sizes

Fancy larger or smaller buttons? Add `size="lg"` or "size="sm" for additional sizes.

:::demo
```html
<div>
 <base-button size="sm" type="primary">Small</base-button>
 <base-button type="primary">Regular</base-button>
 <base-button size="lg" type="primary">Large</base-button>
</div>
```
:::


#### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to the component

:::demo
```html
<div>
  <base-button type="primary" disabled>Primary disabled</base-button>
  <base-button type="secondary" disabled>Secondary disabled</base-button>
</div>
```
:::

Disabled buttons using the `<a>` element behave a bit different:

- `<a>` s don’t support the disabled attribute, so you must add the .disabled class to make it visually appear disabled.
- Some future-friendly styles are included to disable all pointer-events on anchor buttons. In browsers which support that property,
you won’t see the disabled cursor at all.

:::demo
```html
<div>
  <base-button disabled tag="a" type="primary" href="#" role="button" aria-pressed="true">Primary link</base-button>
  <base-button disabled tag="a" type="secondary" href="#" role="button" aria-pressed="true">Link</base-button>
</div>
```
:::

#### Props

<props-table component-name="base-button"></props-table>
