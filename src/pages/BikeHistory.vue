<!-- RentalHistory.vue -->
<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="bikeNumberInput" class="form-label">Enter Bike Number:</label>
            <b-form-input
              id="bikeNumberInput"
              v-model="bikeNumber"
              class="mb-3"
            ></b-form-input>

            <label for="timeRangePicker" class="form-label">Select Time Range:</label>
            <div class="d-flex align-items-center mb-3">
              <VueDatePicker 
                  v-model="dateRange"
                  :input-props="{ placeholder: 'Select date range' }"
                  range
                  class="form-control"
                ></VueDatePicker >
            </div>  

            <b-button @click="fetchRentalHistory" variant="primary" class="mb-3">Fetch History</b-button>
          </div>

          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Rental History</h4>
              <p class="card-category">History for Bike Number: {{ bikeNumber }}</p>
            </template>
            
            <l-table
              class="table-hover table-striped"
              :columns="table.columns"
              :data="rentalHistory"
            ></l-table>

            <!-- Add pagination if needed -->
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LTable from 'src/components/Table.vue';
import Card from 'src/components/Cards/Card.vue';
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import { BFormInput, BButton } from 'bootstrap-vue';

// Assume you have a function to fetch rental history from an API
const fetchRentalHistoryAPI = (bikeNumber, startDate, endDate) => {
  // Mock data for demonstration
  return [
    { rental_id: 1, bike_number: "W004232", rented_at: "2023-07-07T10:00:00", returned_at: "2023-07-07T14:00:00" },
    { rental_id: 2, bike_number: "W004232", rented_at: "2023-07-10T12:00:00", returned_at: "2023-07-10T16:00:00" },
    // Add more data as needed
  ];
};

const rentalHistoryColumns = ["Rental_ID", "Bike_Number", "Rented_At", "Returned_At"];

export default {
  components: {
    LTable,
    Card,
    VueDatePicker,
    'b-form-input': BFormInput,
    'b-button': BButton,
  },
  data() {
    return {
      bikeNumber: '',
      dateRange: null,
      rentalHistory: [],
      table: {
        columns: [...rentalHistoryColumns],
      },
    };
  },
  methods: {
    fetchRentalHistory() {
      const startDate = this.dateRange ? this.dateRange[0] : "";
      const endDate = this.dateRange ? this.dateRange[1] : "";

      this.rentalHistory = fetchRentalHistoryAPI(this.bikeNumber, startDate, endDate);
    },
  },
};
</script>

<style>
</style>
