<template>
  <Card>
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div :id="chartId" class="ct-chart"></div>
    <slot name="footer">
    </slot>
  </Card>
</template>
<script>
  import Card from './Card.vue'
  export default {
    components: {
      Card
    },

    name: 'chart-card',
    props: {
      footerText: {
        type: String,
        default: ''
      },
      headerTitle: {
        type: String,
        default: 'Chart title'
      },
      chartType: {
        type: String,
        default: 'Line' // Line | Pie | Bar
      },
      chartOptions: {
        type: Object,
        default: () => {
          return {}
        }
      },
      chartData: {
        type: Object,
        default: () => {
          return {
            labels: [],
            series: []
          }
        }
      }
    },
    data () {
      return {
        chartId: 'no-id',
        $Chartist: null
      }
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initChart () {
        var chartIdQuery = `#${this.chartId}`
        this.$Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions)
      },
      /***
       * Assigns a random id to the chart
       */
      updateChartId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.chartId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    },
    async mounted () {
      this.updateChartId()
      const Chartist = await import('chartist')
      this.$Chartist = Chartist
      this.initChart()
    }
  }
</script>
<style>

</style>
