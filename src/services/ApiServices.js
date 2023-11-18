import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const ApiServices = {
  // Generic GET request
  async getVehicle(parameters) {
    return await axios.get(`${API_BASE_URL}/vehicle`, {
        params: parameters
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  async get(endpoint, parameters) {
    return await axios.get(`${API_BASE_URL}/${endpoint}`, {
        params: parameters
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

//   // Generic GET request
//   get(endpoint) {
//     return axios.get(`${API_BASE_URL}/${endpoint}`)
//       .then(response => response.data)
//       .catch(error => {
//         throw error;
//       });
//   },

  // Generic POST request
//   post(endpoint, data) {
//     return axios.post(`${API_BASE_URL}/${endpoint}`, data)
//       .then(response => response.data)
//       .catch(error => {
//         throw error;
//       });
//   },

  // Add more methods for other HTTP methods (PUT, DELETE, etc.) if needed
};

export default ApiServices;
