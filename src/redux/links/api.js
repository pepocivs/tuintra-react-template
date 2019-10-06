import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchLinks = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/links`);

export default fetchLinks;