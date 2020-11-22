import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchStreams = () => {
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/streams`);
}

export default fetchStreams;