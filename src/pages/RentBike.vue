<template>
  <div class="container mt-4">
    <h2>Rent a Bike</h2>
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
      <select class="form-control" v-model="selectedStation" @change="updateBikes">
        <option v-for="station in stations" :key="station[0]">{{ station[1] }}</option>
      </select>
    </div>
    <!-- <button class="btn btn-primary" @click="rentBike">Rent Bike</button> -->
    <!-- Display the list of bikes based on the selected station -->
    <BikeList v-if="selectedStation" :bikes="bikes" @rent="showReturnPage" />
  </div>
</template>

<style lang="scss">

</style>

<script>
import BikeList from './BikeList.vue'; // Create a separate component for the bike list
import ApiServices from 'src/services/ApiServices.js';

export default {
  data() {
    return {
      countries: ['CAN', 'US'], // Add more countries as needed
      selectedCountry: '',
      cities: [],
      selectedCity: '',
      stations: [],
      selectedStation: '',
      bikes: [], // This will be populated based on the selected station
      selectedBike: '',
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
    updateBikes() {
      // Implement logic to update stations based on the selected city
      console.log("Station changed!", this.selectedStation)
      // Implement logic to update cities based on the selected country
      let params = {
        station_id: this.selectedStation
      }
      console.log("params", params)
      ApiServices.get("bike", params)
        .then(response => {
          // Handle the successful response here
          console.log(response);
          this.bikes = response;
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    },
    rentBike() {
      // Implement logic to handle bike rental
      // Disable the RentBike component and show the BikeList
    },
    showReturnPage(bike) {
      let data = {
        bike: bike,
        start_country: this.selectedCountry,
        start_city: this.selectedCity,
        start_station: this.selectedStation,
        start_date: new Date().toLocaleString(),
        already_rented: true,
        end_country: null,
        end_city: null,
        end_station: null,
        end_date: null,
      }
      localStorage.setItem('ride', JSON.stringify(data));
      console.log(bike);
      this.$emit('rent', bike, this.selectedCity, this.selectedStation);
      // Implement logic to show the return page with bike information
      // Disable the RentBike component
      // Enable the ReturnBike component
    }
  },
  components: {
    BikeList
  }
};
</script>