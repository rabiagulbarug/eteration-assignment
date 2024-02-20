import axios from 'axios';

const http = axios.create({
    baseURL: "https://5fc9346b2af77700165ae514.mockapi.io",
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});



export default http;
