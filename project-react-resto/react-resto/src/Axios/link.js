import axios from 'axios'
const url = 'http://localhost:8000/api';
const api_token = 'jOzN6T9UmyMW2Bpg6cFGmYjSz08jJCAI8CQw5wVF'
export const link = axios.create({
    baseURL:url,
    headers:{
        'api_token': api_token
    }
})