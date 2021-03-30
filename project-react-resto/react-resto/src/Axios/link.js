import axios from 'axios'
const url = 'http://localhost:8000/api';
let api_token = sessionStorage.getItem('token')
export const link = axios.create({
    baseURL:url,
    headers:{
        'api_token': api_token
    }
})