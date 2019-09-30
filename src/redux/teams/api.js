import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchTeams = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/teams`);

export default fetchTeams;