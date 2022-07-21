import axios from 'axios';

export const axiosData = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });