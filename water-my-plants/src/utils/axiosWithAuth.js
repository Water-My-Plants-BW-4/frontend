import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(`token is ${token}`);
  return axios.create({
    // baseURL: "I will add here the URL from BackEnd",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;