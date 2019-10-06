import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchPages = pageId => {
  let queryParams = '';
  if (pageId) queryParams = `?pageId=${pageId}`;
  return axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/pages${queryParams}`);
}

export default fetchPages;