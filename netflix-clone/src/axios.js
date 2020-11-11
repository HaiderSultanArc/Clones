import axios from 'axios';

// Base URL to make requests to the movies Data base
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// instance.get('/foo-bar') will be used that will translate into https://api.themoviedb.org/3/foo-bar

export default instance;