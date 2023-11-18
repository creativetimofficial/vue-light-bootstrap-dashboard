<template>
  <div class="content">
    <div class="container-fluid">
      <div class="col-md-12">
        <div class="form-group">
          <label for="chartType">Choose Chart Type:</label>
          <select v-model="selectedChartType" class="form-control">
            <option value="station">Station</option>
            <option value="bike">Bike</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <template v-if="selectedChartType === 'station'">
        <div class="row">
          <div class="col-md-4">
            <chart-card :chart-data="pieChartStationCountry.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">Station statistics</h4>
                <p class="card-category">Number of stations in country</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i> US
                  <i class="fa fa-circle text-danger"></i> CAN
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
          <div class="col-md-4">
            <chart-card :chart-data="pieChartStationCity.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">Station statistics</h4>
                <p class="card-category">Number of stations in city</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i> Greenville
                  <i class="fa fa-circle text-danger"></i> Edmonton
                  <i class="fa fa-circle" style="color: #FFA534"></i> Clanton
                  <i class="fa fa-circle" style="color: #9368E9"></i> Birmingham
                  <i class="fa fa-circle" style="color: #87CB16"></i> Dothan
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
          <div class="col-md-4">
            <chart-card :chart-data="pieChartStationRide.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">Station statistics</h4>
                <p class="card-category">Number of stations in rental</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i>
                  <i class="fa fa-circle text-danger"></i> Columbus Circle / Union Station
                  <i class="fa fa-circle" style="color: #FFA534"></i> New Hampshire Ave & T St NW
                  <i class="fa fa-circle" style="color: #9368E9"></i> 15th & P St NW
                  <i class="fa fa-circle" style="color: #87CB16"></i> Lincoln Memorial
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
        </div>
      </template>
    <!-- --------------------------------------- -->
      <template v-if="selectedChartType === 'bike'">
        <div class="row">
          <div class="col-md-4">
            <chart-card :chart-data="pieChartBikeCountry.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">Bike statistics</h4>
                <p class="card-category">Number of bikes in country</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i> CAN
                  <i class="fa fa-circle text-danger"></i> US
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
          <div class="col-md-4">
            <chart-card :chart-data="pieChartRideable.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">Bike statistics</h4>
                <p class="card-category">Number of each rideable type chosen by users</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i> classic_bike
                  <i class="fa fa-circle text-danger"></i> electric_bike
                  <i class="fa fa-circle" style="color: #FFA534"></i> docked_bike
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
        </div>
      </template>
    <!-- ------------------------------------------------- -->
      <template v-if="selectedChartType === 'user'">
        <div class="row">
          <div class="col-md-4">
            <chart-card :chart-data="pieChartUserCountry.data" chart-type="Pie">
              <template slot="header">
                <h4 class="card-title">User statistics</h4>
                <p class="card-category">Number of users in country</p>
              </template>
              <template slot="footer">
                <div class="legend">
                  <i class="fa fa-circle text-info"></i> CAN
                  <i class="fa fa-circle text-danger"></i> US
                </div>
                <hr>
              </template>
            </chart-card>
          </div>
        </div>
      </template>
    </div>
      </div>
    </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
  import ApiServices from 'src/services/ApiServices.js';
  import store from 'src/store'; 

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        selectedChartType: 'station', // Default selected option
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        loading: false,
        pieChartStationCountry: {
          data: {
            labels: [],
            series: []
          }
        },
        pieChartStationCity: {
          data: {
            labels: [],
            series: []
          }
        },
        pieChartStationRide: {
          data: {
            labels: [],
            series: []
          },
        },
        pieChartBikeCountry: {
          data: {
            labels: [],
            series: []
          }
        },
        pieChartRideable: {
          data: {
            labels: [],
            series: []
          },
        },
        pieChartUserCountry: {
          data: {
            labels: [],
            series: []
          },
        },
      }
    },
    watch: {
      // Watch for changes in the selectedChartType and update the chart data accordingly
      selectedChartType(newVal) {
        this.updateChartData(newVal);
      }
    },
    mounted() {
      // Initial data fetching based on the default selected option
      this.updateChartData(this.selectedChartType);
    },
    methods: {
      formatChartData(apiData) {
        // Format the API response for the pie chart data
        // const labels = apiData.map(item => item.city || item.country); // Choose appropriate property based on the chartType
        // Sort the data based on the count property in descending order
        const sortedData = apiData.sort((a, b) => b.count - a.count);

        // Take the top 10 items
        const top10Data = sortedData.slice(0, 5);
        console.log(top10Data)

        const series = top10Data.map(item => item.count);
        const labels = top10Data.map(item => String(item.count));

        // Ensure the series adds up to 1 (100%)
        const total = series.reduce((sum, value) => sum + value, 0);
        const normalizedSeries = series.map(value => value / total);

        return {
          labels: labels,
          series: normalizedSeries,
        };
      },
      async updateChartData(chartType) {
        const cachedData = store.getters.getCachedChartData(chartType);

        if (cachedData) {
          // Use cached data
          console.log("cachedData", cachedData)
          for (let x in cachedData){
            if (chartType === 'station') {
              let endpoints = ["station_count_in_country", "station_count_in_city", "station_count_in_rides"]
              for (let x in endpoints) {
                let chartData = cachedData[endpoints[x]]
                if (endpoints[x] === 'station_count_in_country') {
                  this.pieChartStationCountry.data = chartData;
                } else if (endpoints[x] === 'station_count_in_city') {
                  this.pieChartStationCity.data = chartData;
                } else if (endpoints[x] === 'station_count_in_rides') {
                  this.pieChartStationRide.data = chartData;
                }
              }
            } else if (chartType === 'bike') {
              let endpoints = ["bike_count_in_country", "rideable_type_count"]
              for (let x in endpoints) {
                let chartData = cachedData[endpoints[x]]
                if (endpoints[x] === 'bike_count_in_country') {
                  this.pieChartBikeCountry.data = chartData;
                } else if (endpoints[x] === 'rideable_type_count') {
                  this.pieChartRideable.data = chartData;
                }
              }
            } else if (chartType === 'user') {
              let endpoints = ["user_count_in_country"]
              for (let x in endpoints) {
                let chartData = cachedData[endpoints[x]]
                chartStationData[endpoints[x]] = chartData
              }
            }
          }
        } else {
          this.loading = true;
          try {
            if (chartType === 'station') {
              let endpoints = ["station_count_in_country", "station_count_in_city", "station_count_in_rides"]
              let chartStationData = {}
              for (let x in endpoints) {
                await ApiServices.get(endpoints[x])
                .then(response => {
                  let formatChartData = this.formatChartData(response)
                  chartStationData[endpoints[x]] = formatChartData
                  // Update the corresponding chart data based on the API response
                  if (endpoints[x] === 'station_count_in_country') {
                    this.pieChartStationCountry.data = formatChartData;
                    // console.log(this.formatChartData(response))
                  } else if (endpoints[x] === 'station_count_in_city') {
                    this.pieChartStationCity.data = formatChartData;
                  } else if (endpoints[x] === 'station_count_in_rides') {
                    this.pieChartStationRide.data = formatChartData;
                    // console.log(this.pieChartStationRide.data)
                  }
                })
                .catch(error => {
                  console.error('Error fetching chart data:', error);
                });
              }
              store.commit('saveCachedChartData', {
                chartType,
                data: chartStationData,
              });
            }
            else if (chartType === 'bike') {
              let endpoints = ["bike_count_in_country", "rideable_type_count"]
              let chartStationData = {}
              for (let x in endpoints) {
                await ApiServices.get(endpoints[x])
                .then(response => {
                  let formatChartData = this.formatChartData(response)
                  chartStationData[endpoints[x]] = formatChartData
                  if (endpoints[x] === 'bike_count_in_country') {
                    this.pieChartBikeCountry.data = formatChartData;
                  } else if (endpoints[x] === 'rideable_type_count') {
                    this.pieChartRideable.data = formatChartData;
                  }
                })
                .catch(error => {
                  console.error('Error fetching chart data:', error);
                });
              }
              store.commit('saveCachedChartData', {
                chartType,
                data: chartStationData,
              });
            }
            else if (chartType === 'user') {
              let endpoints = ["user_count_in_country"]
              let chartStationData = {}
              for (let x in endpoints) {
                await ApiServices.get(endpoints[x])
                .then(response => {
                  let formatChartData = this.formatChartData(response)
                  chartStationData[endpoints[x]] = formatChartData
                  // if (endpoints[x] === 'bike_count_in_country') {
                    this.pieChartUserCountry.data = formatChartData;
                  // } 
                  console.log(this.pieChartUserCountry.data)
                })
                .catch(error => {
                  console.error('Error fetching chart data:', error);
                });
              }
              store.commit('saveCachedChartData', {
                chartType,
                data: chartStationData,
              });
            }
          } finally {
          this.loading = false;
        }
        }
      }
    },
    created(){
      let endpoints = ["station_count_in_country", "station_count_in_city", "station_count_in_rides"]
      for (let x in endpoints) {
        ApiServices.get(endpoints[x])
        .then(response => {
          // Update the corresponding chart data based on the API response
          if (endpoints[x] === 'station_count_in_country') {
            this.pieChartStationCountry.data = this.formatChartData(response);
            // console.log(this.formatChartData(response))
          } else if (endpoints[x] === 'station_count_in_city') {
            this.pieChartStationCity.data = this.formatChartData(response);
          } else if (endpoints[x] === 'station_count_in_rides') {
            this.pieChartStationRide.data = this.formatChartData(response);
          }
        })
        .catch(error => {
          console.error('Error fetching chart data:', error);
        });
      }
    }

  };
</script>
<style>

</style>
