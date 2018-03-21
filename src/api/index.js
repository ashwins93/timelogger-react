import axios from 'axios';

export const authenticate = (name, password) => axios.post('/api/login', {
  name,
  password,
})
  .then(response => response.data)
  .catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return error.request;
    }
    return error;
  });

export const getLogs = name => axios.get('/api/time', {
  params: {
    name,
  },
}).then(response => response.data)
  .catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return error.request;
    }
    return error;
  });
