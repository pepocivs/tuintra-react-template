import axios from "axios";
import clubInfo from "helpers/clubInfo";

const fetchDocuments = () =>
  axios.get(`${clubInfo.apiHost}/${clubInfo.subdomain}/documents`);

export default fetchDocuments;