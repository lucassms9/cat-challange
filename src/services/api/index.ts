import axios from 'axios';
import { token } from '../../consts';

export const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': token,
  },
});
