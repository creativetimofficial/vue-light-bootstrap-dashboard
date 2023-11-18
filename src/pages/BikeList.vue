<!-- BikeList.vue -->
<template>
  <div>
    <h3>List of Available Bikes</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th style="width: 25%;">Bike Number</th>
          <th style="width: 25%;">Introduced Date</th>
          <th style="width: 25%;">Rideable Type</th>
          <th style="width: 25%;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bike in bikes" :key="bike.bike_number">
          <td>{{ bike.bike_number }}</td>
          <td>{{ formatDate(bike.introduced_date) }}</td>
          <td>{{ bike.rideable_type }}</td>
          <td><button class="btn btn-primary" @click="rentBike(bike)">Rent</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    bikes: {
      type: Array,
      required: true
    }
  },
  methods: {
    rentBike(bike) {
      this.$emit('rent', bike);
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>
