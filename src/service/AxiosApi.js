import Axios from 'axios';
import Cookies from 'js-cookie';

const instance = Axios.create({
    baseURL: 'http://localhost:8080'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = Cookies.get("X_AUTH_TOKEN");

export default instance;