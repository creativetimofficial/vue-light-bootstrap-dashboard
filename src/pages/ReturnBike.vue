<template>
  <div class="container mt-4">
    <h2>Return Bike</h2>
    <div class="form-group">
      <label for="country">Country:</label>
      <select class="form-control" v-model="selectedCountry" @change="updateCities">
        <option v-for="country in countries" :key="country">{{ country }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="city">City:</label>
      <select class="form-control" v-model="selectedCity" @change="updateStations">
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="station">Station:</label>
      <select class="form-control" v-model="selectedStation">
        <option v-for="station in stations" :key="station[0]">{{ station[1] }}</option>
      </select>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card bg-light">
          <div class="card-body">
            <h3 class="card-title mb-4">Bike Information</h3>
            <p class="card-text">Bike Number: {{ bike.bike_number }}</p>
            <p class="card-text">Introduced Date: {{ formatDate(bike.introduced_date) }}</p>
            <p class="card-text">Rideable Type: {{ bike.rideable_type }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body ">
            <h3 class="card-title mb-4">Start Information</h3>
            <p class="card-text">Country: {{ bike.country }}</p>
            <p class="card-text">City: {{ city_name }}</p>
            <p class="card-text">Station: {{ station_name }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mb-4">End Information</h3>
            <p class="card-text">Country: {{ selectedCountry }}</p>
            <p class="card-text">City: {{ selectedCity }}</p>
            <p class="card-text">Station: {{ selectedStation }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="returnBike">Return Bike</button>
  </div>
</template>

<script>
import ApiServices from 'src/services/ApiServices.js';

export default {
  props: {
    bike: {
      type: Object,
      required: true
    },
    city_name: String,
    station_name: String,
  },
  data() {
    return {
      countries: ['CAN', 'US'], // Add more countries as needed
      selectedCountry: '',
      cities: [],
      selectedCity: '',
      stations: [],
      selectedStation: '',
    };
  },
  methods: {
    updateCities() {
      console.log("Country changed!", this.selectedCountry)
      // Implement logic to update cities based on the selected country
      let params = {
        country: this.selectedCountry
      }
      console.log("params", params)
      ApiServices.get("city", params)
        .then(response => {
          // Handle the successful response here
          console.log(response);
          this.cities = response;
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    },
    updateStations() {
      // Implement logic to update stations based on the selected city
      console.log("City changed!", this.selectedCity)
      // Implement logic to update cities based on the selected country
      let params = {
        city: this.selectedCity
      }
      console.log("params", params)
      ApiServices.get("station", params)
        .then(response => {
          // Handle the successful response here
          console.log(response);
          this.stations = response;
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    },
    returnBike() {
      // Retrieve data from local storage
      const storedData = localStorage.getItem('ride');

      // Parse the JSON data
      const parsedData = JSON.parse(storedData);
      parsedData.end_country = this.selectedCountry
      parsedData.end_city = this.selectedCity
      parsedData.end_station = this.selectedStation
      parsedData.end_date = new Date().toLocaleString()
      console.log(parsedData)
      let null_data = {
        bike: null,
        start_country: null,
        start_city: null,
        start_station: null,
        start_date: null,
        already_rented: false,
        end_country: null,
        end_city: null,
        end_station: null,
        end_date: null,
      }
      localStorage.setItem('ride', JSON.stringify(null_data));
      this.$emit('return');
      // Implement logic to handle bike return
      // Disable the ReturnBike component
      // Enable the RentBike component
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>