import axios from "axios";

const base =  'https://rickandmortyapi.com/api';
export const $host = axios.create({
    baseURL: base
});