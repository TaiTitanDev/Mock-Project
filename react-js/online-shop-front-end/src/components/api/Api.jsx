import axios from "axios";
//mock API
let API_URL = "https://6221aca0afd560ea69b68260.mockapi.io/api/v1";
export default function callApi(method = "GET", endpoint, body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
