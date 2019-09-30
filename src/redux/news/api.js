import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchNews = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/news`);

export default fetchNews;