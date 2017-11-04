# Charts

<hr>
For the implementation of graphic charts, we used the Chartist plugin and added our custom styles.
The plugin is free to download and use [here](https://gionkunz.github.io/chartist-js/examples.html).
[Gion Kunz](https://github.com/gionkunz) is the guy behind the project; he did an awesome job and we recommend using his stuff. 
Besides all the great options for customisation that you have using it, it is also fully responsive. 
We changed the colours, background and typography.

## Usage
To use Chartist simply import it
```js
import Chartist from 'chartist'
```
!> **Note** We will skip the import part in the demos below since Chartist will be imported globally in the docs.

### Line chart
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <h4> <br><small>24 Hours Performance</small></h4>
    <div id="chartPerformance" class="ct-chart"></div>
  </div>
</template>
<script>
  export default{
      methods: {
        initPerformanceChart () {
          const dataPerformance = {
            labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
              [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
          }
          const optionsPerformance = {
            showPoint: false,
            lineSmooth: true,
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40
  
            },
            low: 0,
            high: 16,
            height: '250px'
          }
          Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance)
        }
      },
      mounted () {
        this.initPerformanceChart()
      }
    }
</script>
```

### Bar chart
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <h4><small>Views</small></h4>
    <div id="chartViews" class="ct-chart"></div>
  </div>
</template>
<script>
  export default{
      methods: {
        initBarChart () {
         const dataViews = {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
           series: [
             [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
           ]
         };
         const optionsViews = {
           seriesBarDistance: 10,
           classNames: {
             bar: 'ct-bar'
           },
           axisX: {
             showGrid: false,
           },
           height: "250px"
         };
         const responsiveOptionsViews = [
           ['screen and (max-width: 640px)', {
             seriesBarDistance: 5,
             axisX: {
               labelInterpolationFnc: function (value) {
                 return value[0];
               }
             }
           }]
         ];
         Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);
        }
      },
      mounted () {
        this.initBarChart()
      }
    }
</script>
```

### Pie chart
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
   <h4><small>Public Preferences</small></h4>
   <div class="row margin-top">
    <div class="col-md-10 col-md-offset-1">
      <div id="chartPreferences" class="ct-chart"></div>
    </div>
   </div>
   <div class="row">
    <div class="col-md-10 col-md-offset-1">
        <h6>Legend</h6>
       <i class="fa fa-circle text-info"></i> Open
       <i class="fa fa-circle text-danger"></i> Bounce
       <i class="fa fa-circle text-warning"></i> Unsubscribe
    </div>
   </div>
  </div>
</template>
<script>
  export default{
    methods: {
      initPieChart () {
        Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });
      }
    },
    mounted () {
      this.initPieChart()
    }
  }
</script>
```


## Chart Card
We also built a custom wrapper component for easier initialization of charts
In order to use it, simply pass chartist `data` and `options` as props to this component.
We also provided animations for `Line` and `Bar` charts inside this component.

```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
    <div class="col-xs-12">
      <chart-card :chart-data="lineChart.data"
                  :chart-options="lineChart.options"
                  :responsive-options="lineChart.responsiveOptions">
        <template slot="header">
          <h4 class="title">Users Behavior</h4>
          <p class="category">24 Hours performance</p>
        </template>
        <template slot="footer">
          <div class="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
          <hr>
          <div class="stats">
            <i class="fa fa-history"></i> Updated 3 minutes ago
          </div>
        </template>
      </chart-card>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        lineChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
      }
    }
  }
</script>
```
!> **Note** You can also refer to other examples with chart-cards which can be found in `src/components/Dashboard/Views/Overview.vue`

### Chart card

| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| chartType     | Chartist chart type   | string  |       Line/Bar/Pie        |     Line     |
| chartOptions     | Chartist options   | Object  |       Chartist options        |     {}     |
| chartData     | Chartist data   | Object  |       Chartist data        |     {labels: [],series: []}     |
| responsiveOptions     | Chartist responsive options   | Object/Array  |       Chartist responsive options        |     —     |

### Chart card Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| initialized  | triggers when the chart is initialized | the chart instance |
