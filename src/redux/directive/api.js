import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchDirective = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/people`);

export default fetchDirective;