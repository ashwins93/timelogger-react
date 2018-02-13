import axios from 'axios';

export const authenticate = (name, password) => {
  return axios.post('/api/login', {
    name,
    password
  })
  .then(response => response.data)
  .catch(function (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};

export const getLogs = ( name ) => {
  return axios.get('/api/time', {
    params: {
      name,
    }
  })
  .then(response => response.data)
  .catch(error => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};