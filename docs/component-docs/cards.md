# Cards

We've created three types of cards, one is for simple use,
one is for creating stats cards and the last one is for creating chart cards.
They have to be imported where you use them like this:

```js
import Card from 'src/components/UIComponents/Cards/Card.vue'
import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
```

## Local usage
```js
components: {
  Card,
  StatsCard,
  ChartCard
}
```

## Global usage
```js
Vue.component(Card)
Vue.component(StatsCard)
Vue.component(ChartCard)
```

We've already covered `ChartCard` in the previous section [charts](charts?id=chart-card) and therefore will cover only
`Card` and `StatsCard` in this section.


## Card
```html
/*vue*/
<desc>
</desc>
<template>
<card>
  <h4 slot="header">This is my card title</h4>
  <div class="row">
    <div class="col-xs-12">
     This is my card content
    </div>
  </div>
  <div slot="footer">
   <div class="stats">
     Card footer text
   </div>
  </div>
</card>
</template>

<script>
  export default {}
</script>
```

## Stats card
```html
/*vue*/
<desc>
</desc>
<template>
<stats-card>
  <div slot="header" class="icon-big text-center icon-warning">
    <i class="fa fa-server text-warning"></i>
  </div>
  <div slot="content" class="numbers">
    <p>Capacity</p>105GB
  </div>
  <div slot="footer" class="stats">
    <i class="fa fa-refresh"></i>Updated now
  </div>
</stats-card>
</template>

<script>
  export default {}
</script>
```

