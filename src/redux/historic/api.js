import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchHistoric = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/historic`);

export default fetchHistoric;