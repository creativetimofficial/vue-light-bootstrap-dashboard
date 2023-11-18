<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="countryDropdown" class="form-label">Select Country:</label>
            <b-form-select
              id="countryDropdown"
              v-model="selectedCountry"
              :options="countries"
              class="mb-3"
            ></b-form-select>
          </div>
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Stations</h4>
              <p class="card-category">All stations in {{ selectedCountry }}</p>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table.columns"
                     :data="displayedStations"
            ></l-table>
            <div class="d-flex justify-content-center">
              <b-pagination
                v-model="currentPage"
                :total-rows="filteredStations.length"
                :per-page="itemsPerPage"
                align="fill"
                size="sm"
                class="my-3"
                v-show="displayedStations"
              ></b-pagination>
            </div>
          </card>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  import { BFormSelect, BPagination } from 'bootstrap-vue';
  import ApiServices from 'src/services/ApiServices.js';

  const myData = [{"station_id": "31229.0", "city": "Calgary", "country": "CAN", "station_name": "New Hampshire Ave & T St NW"},
{"station_id": "31715.0", "city": "Banff", "country": "CAN", "station_name": "37th & Ely Pl SE"}]
  const myColumns = ["Station_id", "Station_name", "City", "Country"]
  export default {
    components: {
      LTable,
      Card,
      'b-form-select': BFormSelect,
      'b-pagination': BPagination,
    },
    data () {
      return {
        table: {
          columns: [...myColumns],
          data: []
        },
        countries: [],
        selectedCountry: '',
        currentPage: 1,
        itemsPerPage: 8,
      }
    },
    computed: {
      filteredStations() {
        // Filter stations based on the selected country
        if (this.selectedCountry) {
          return this.table.data.filter(station => station.country === this.selectedCountry);
        }
        return this.table.data;
      },
      displayedStations() {
        // Calculate the start and end indices based on pagination
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        
        // Return the stations for the current page
        return this.filteredStations.slice(startIndex, endIndex);
      },
    },
    watch: {
      selectedCountry() {
        // Reset current page when the city changes
        this.currentPage = 1;
      },
    },
    created() {
      let params = {}
      ApiServices.get("station", params)
      .then(response => {
        // Handle the successful response here
        this.table.data = [...response];
        console.log(this.table.data);
        this.countries = Array.from(new Set(this.table.data.map(station => station.country)));
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
      // Populate the countries array from the data
    },
  }
</script>
<style>
</style>
