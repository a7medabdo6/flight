import axios from 'axios';

const baseurl_Server = axios.create({ baseURL: 'http://64.226.73.12/api/' });
// const baseurl_Dev = axios.create({ baseURL: 'http://localhost:5000/' });

//http://137.184.12.206/api/

export default baseurl_Server;
