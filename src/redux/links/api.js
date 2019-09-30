import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchClubData = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/links`);

export default fetchClubData;