import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchCalendar = competitionId => {
  let queryParams = '';
  if (competitionId && competitionId > 0) queryParams = `?competitionId=${competitionId}`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/calendar${queryParams}`);
}

export default fetchCalendar;