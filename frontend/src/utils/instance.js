import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7001/api/",
  timeout: 3 * 1000,
});

instance.interceptors.request.use();
instance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default instance;
