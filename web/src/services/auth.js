import axios from "axios";

export const api = axios.create({
  baseURL: "https://reqres.in/api/"
});

export const TOKEN_KEY = "ok";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

  const login = async (email, password) => {
    const response = await axios
      .post(api + "login", {
        email,
        password
      });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  const logout = () => {
    localStorage.removeItem("user");
  }

  const register = (email, password)  => {
    return axios.post(api + "register", {
      email,
      password
    });
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  }

  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };