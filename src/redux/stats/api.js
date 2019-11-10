import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchStats = teamCompetitionId => {
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/previous-stats/${teamCompetitionId}`);
}

export default fetchStats;