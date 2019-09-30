import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchNews = newSlug => {
  let queryParams = '';
  if (newSlug && newSlug.length > 0) queryParams = `?new=${newSlug}`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/news${queryParams}`);
}

export default fetchNews;