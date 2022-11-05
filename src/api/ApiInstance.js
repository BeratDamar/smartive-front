import { create } from 'apisauce';

export default create({
  baseURL: 'https://smartive.onrender.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});