 import axios from "axios";
 export const instance = axios.create({
    baseURL: 'http://moviesapi.ir/api/v1/',
    timeout: 3000,
    
  });
  export default instance
  