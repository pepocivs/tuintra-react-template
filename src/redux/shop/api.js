import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchShop = () => {
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/shop`);
}

export default fetchShop;