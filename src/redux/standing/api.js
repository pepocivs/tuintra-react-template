import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchStanding = competitionId => {
  let queryParams = '';
  if (competitionId && competitionId > 0) queryParams = `/${competitionId}`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/standings${queryParams}`);
}

export default fetchStanding;