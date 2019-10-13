import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchPeople = (params) => {
  const queryParams = (params === 'birthdays') ? '?nextBirthdays=5' : '';
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/people${queryParams}`);
}

export default fetchPeople;