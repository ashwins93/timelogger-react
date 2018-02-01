import axios from 'axios';

export const authenticate = (name, password) =>{
  return axios.post('/api/login', {
    name,
    password
  });
}