import axios from "axios";

const auth_token = sessionStorage.getItem("AUTH_TOKEN");

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

if (auth_token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${auth_token}` };
} else {
  axios.defaults.headers.common = { Authorization: null };
  /*if setting null does not remove `Authorization` header then try     
           delete axios.defaults.headers.common['Authorization'];
         */
}

export const instance = axios.create();
