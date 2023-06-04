import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chat-app-ahtisham.herokuapp.com/',
});

export default instance;