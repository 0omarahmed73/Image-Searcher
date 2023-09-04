import axios from "axios";

const APIURL = 'https://api.scaleserp.com'
const axiosAPI = axios.create({
  baseURL : APIURL
})
export default axiosAPI