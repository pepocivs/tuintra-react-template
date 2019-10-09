import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchCalendar = params => {
  const queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/calendar?${queryParams}`);
}

export default fetchCalendar;