import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 3 * 1000,
});

const account = localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : {};

instance.interceptors.request.use(
  (config) => {
    // if (config.url !== "/login") {
    // }
    config.headers.Authorization = `Bearer ${account.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// instance.interceptors.response.use((response) => {
//   const { data } = response;
//   return data;
// });

export default instance;
