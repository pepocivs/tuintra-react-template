import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchPeople = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/people`);

export default fetchPeople;