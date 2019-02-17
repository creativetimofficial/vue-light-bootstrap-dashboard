# Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

<hr>

#### Overview

Be sure to use an appropriate type attribute on all inputs (e.g., `email` for email address or `number` for numerical information)
to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate Bootstrap’s form styles.
Keep reading for documentation on required classes, form layout, and more.


#### Form controls

:::demo
```html
<card>
    <form @submit.prevent>
      <base-input label="Email address"
                  type="email"
                  placeholder="Enter email">
          <small slot="helperText" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </base-input>
      <base-input label="Password"
                  type="password"
                  placeholder="Password">
      </base-input>
      <base-checkbox>
        Option one is this 
     </base-checkbox>
     <base-button native-type="submit" type="primary">Submit</button>
    </form>
</card>
```
:::

#### Form controls

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the .form-control class.
Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our custom forms to further style `<select>`s.
You can use the `base-input` component and the default slot which will act like a div with
`form-group` class.

:::demo
```html
<card>
    <form @submit.prevent>
      <base-input label="Email address"
                  type="email"
                  placeholder="Enter email">
      </base-input>
      <base-input label="Example select">
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </base-input>
      <base-input label="Example multiple select">
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </base-input>
      <base-input label="Example textarea">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </base-input>
    </form>
</card>
```
:::

#### Examples

:::demo
```html
<card>
  <base-input class="has-success" value="Success">
  </base-input>
</card>
```
:::

:::demo
```html
<card>
  <base-input class="has-danger" value="Error">
  </base-input>
</card>
```
:::

:::demo
```html
<card>
  <base-input addon-left-icon="tim-icons icon-single-02" placeholder="With nucleo icon">
  </base-input>
</card>
```
:::

:::demo
```html
<card>
  <base-input addon-left-icon="fab fa-dribbble" placeholder="With font awesome icon">
  </base-input>
</card>
```
:::

#### Checkboxes and radios

:::demo
```html
<template>
<div>
   <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checked">
      Checked
  </base-checkbox>

  <base-checkbox class="mb-3" v-model="checkboxes.uncheckedDisabled" disabled>
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checkedDisabled" disabled>
      Checked
  </base-checkbox>
</div>
</template>
<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          }
       }
    }
}
</script>
```
:::


#### Radio buttons

:::demo
```html
<template>
<div>
    <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
        Unchecked
    </base-radio>

    <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
        Checked
    </base-radio>


    <base-radio name="radio2" class="mb-3" v-model="radio.radio2" disabled>
        Disabled unchecked
    </base-radio>

    <base-radio name="radio3" class="mb-3" v-model="radio.radio2" disabled>
        Disabled checked
    </base-radio>
</div>
</template>
<script>
export default {
    data(){
        return {
         radio: {
           radio1: "radio1",
           radio2: "radio3"
         }
       }
    }
}
</script>
```
:::

#### Inline

:::demo
```html
<template>
<div>
   <base-checkbox inline class="mb-3" v-model="checkboxes.unchecked">
      Unchecked
  </base-checkbox>
  <base-checkbox inline class="mb-3" v-model="checkboxes.checked">
      Checked
  </base-checkbox>
</div>
</template>
<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true
          }
       }
    }
}
</script>
```
:::

:::demo
```html
<template>
<div>
    <base-radio inline name="radio0" class="mb-3" v-model="radio.radio1">
        Unchecked
    </base-radio>

    <base-radio inline name="radio1" class="mb-3" v-model="radio.radio1">
        Checked
    </base-radio>
</div>
</template>
<script>
export default {
    data(){
        return {
         radio: {
           radio1: "radio1",
           radio2: "radio3"
         }
       }
    }
}
</script>
```
:::

#### Layout

Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically.
Additional classes can be used to vary this layout on a per-form basis.

#### Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

:::demo
```html
<card>
  <form>
      <div class="row">
        <div class="col">
          <base-input type="text" placeholder="First name"/>
        </div>
        <div class="col">
          <base-input type="text" placeholder="Last name"/>
        </div>
      </div>
    </form>
</card>
```
:::

#### Form row

You may also swap .row for .form-row, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

:::demo
```html
<card>
  <form>
      <div class="form-row">
        <div class="col">
          <base-input type="text" placeholder="First name"/>
        </div>
        <div class="col">
          <base-input type="text" placeholder="Last name"/>
        </div>
      </div>
    </form>
</card>
```
:::


More complex layouts can also be created with the grid system.

:::demo
```html
<card>
  <form>
      <div class="form-row">
          <base-input class="col-md-6" type="email" label="Email" placeholder="Email"/>
          <base-input class="col-md-6" type="password" label="Password" placeholder="Password"/>
      </div>
      <base-input type="text" label="Address" placeholder="1234 Main St"/>
      <base-input type="text" label="Address 2" placeholder="Apartment, studio, or floor"/>
      <div class="form-row">
          <base-input class="col-md-6" label="City" placeholder="City"/>
          <base-input class="col-md-4" label="State">
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
          </base-input>
          <base-input class="col-md-2" label="Zip" placeholder="Zip"/>
      </div>
      <base-input>
        <base-checkbox>Check me out</base-checkbox>
      </base-input>
      <base-button type="primary" native-type="Submit">Sign in</base-button>
    </form>
</card>
```
:::

#### Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

:::demo
```html
<card>
  <form @submit.prevent>
      <fieldset disabled>
        <base-input label="Disabled input" placeholder="Disabled input"></base-input>
        <base-input label="Disabled select">
          <select id="disabledSelect" class="form-control">
            <option>Disabled select</option>
          </select>
        </base-input>
        <base-checkbox>Can't check me out</base-checkbox>
        <base-button type="primary" native-type="submit">Submit</base-button>
      </fieldset>  
  </form>
</card>
```
:::


::: warning

#### Caveat with anchors

By default, browsers will treat all native form controls 
( `<input>`, `<select>` and `<button>` elements)
 inside a `<fieldset disabled>` as disabled, 
 preventing both keyboard and mouse interactions on them.
 However, if your form also includes `<a ... class="btn btn-*">` elements, 
 these will only be given a style of pointer-events: none. As noted in 
 the section about disabled state for buttons (and specifically in the sub-section for anchor elements), 
 this CSS property is not yet standardized and isn’t fully supported in Opera 18 and below, or in Internet Explorer 10,
 and won’t prevent keyboard users from being able to focus or activate these links.
 So to be safe, use custom JavaScript to disable such links.

:::

::: tip

#### Cross browser compatibility

While Bootstrap will apply these styles in all browsers,
Internet Explorer 11 and below don’t fully support the disabled 
attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.

:::

<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          },
          radio: {
              radio1: "radio1",
              radio2: "radio3"
            },
       }
    }
}
</script>


#### Base Input props

<props-table component-name="base-input"></props-table>

#### Base Checkbox props

<props-table component-name="base-checkbox"></props-table>

#### Base Radio props

<props-table component-name="base-radio"></props-table>


If you want to see more examples and properties please check the [official Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/).
