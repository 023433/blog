import Axios from 'axios';
import Cookies from 'js-cookie';

const instance = Axios.create({
    baseURL: 'https://api.devj.io'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['X-Auth-Token'] = Cookies.get("X_AUTH_TOKEN");

export default instance;