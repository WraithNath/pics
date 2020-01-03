import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7cd2b3b29154e42912cf108c47b3b9a7fdc250f83cfc5e426840f48058c4ca40'
    }
});