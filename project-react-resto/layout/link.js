const url = 'http://localhost:8000/api';
const api_token = 'oDcsCacv72Td0WRa3MfaBOS3tC9yytgXOjX0AryA'



export const link = axios.create({
    baseURL:url,
    headers:{
        'api_token': api_token
    }
})