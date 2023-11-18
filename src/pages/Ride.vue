<template>
  <div>
    <RentBike v-if="!returnPageActive" @rent="showReturnPage" />
    <ReturnBike v-if="returnPageActive" :bike="selectedBike" :city_name="selectedCity" :station_name="selectedStation" :start_date="startDate" @return="showRentPage"/>
  </div>
</template>

<script>
import RentBike from './RentBike.vue';
import ReturnBike from './ReturnBike.vue';

export default {
  data() {
    return {
      returnPageActive: false,
      selectedBike: null,
      selectedCity: null,
      selectedStation: null,
      startDate: null,
    };
  },
  methods: {
    showReturnPage(bike, city, station, startDate) {
      this.returnPageActive = true;
      this.selectedBike = bike;
      this.selectedCity = city;
      this.selectedStation = station;
      this.startDate = startDate;
    },
    showRentPage() {
      this.returnPageActive = false;
      this.selectedBike = null;
      this.selectedCity = null;
      this.selectedStation = null;
      this.startDate = null;
    }
  },
  created() {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('ride');

    // Parse the JSON data
    const parsedData = JSON.parse(storedData);

    // Match variables with the retrieved data
    if (parsedData) {
      this.returnPageActive = parsedData.already_rented;
      this.selectedBike = parsedData.bike;
      this.selectedCity = parsedData.start_city;
      this.selectedStation = parsedData.start_station;
      this.startDate = parsedData.start_date;
    }
    console.log(parsedData)
  },
  components: {
    RentBike,
    ReturnBike
  }
};
</script>