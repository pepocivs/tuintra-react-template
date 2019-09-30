import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchTeams = teamId => {
  let queryParams = '';
  if (teamId && teamId > 0) queryParams = `?teamId=${teamId}&showMembers=true`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/teams${queryParams}`);
}

export default fetchTeams;