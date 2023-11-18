<template>
  <div class="content">
    <div class="container-fluid">
        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Station statistics</h4>
              <p class="card-category">Number of stations in country</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> CAN
                <i class="fa fa-circle text-danger"></i> US
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>
    </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
  import ApiServices from 'src/services/ApiServices.js';

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['344', '398'],
            series: [344/(344+398), 398/(344+398)]
          }
        },
      }
    },
    methods: {
      handleButtonClick() {
        // Handle the button click event here
        console.log('Button clicked!');
        const params = {
          station_name: "Kennedy Center"
        };
        // axios.get('https://api.example.com/data')
        ApiServices.getVehicle(params)
        .then(response => {
          // Handle the successful response here
          console.log(response);
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
        // ApiServices.getVehicle(params)
        // .then(data => {
        //   console.log('Data from API:', data);
        // })
        // .catch(error => {
        //   console.error('Error fetching data:', error);
        // });
      }
    }
  }
</script>
<style>

</style>
