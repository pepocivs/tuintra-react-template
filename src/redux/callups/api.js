import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchCallups = teamId => {
  let queryParams = '';
  if (teamId && teamId.length > 0) queryParams = `/${teamId}`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/callup${queryParams}?last=true`);
}

export default fetchCallups;