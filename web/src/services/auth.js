import axios from "axios";

export const api = axios.create({
  baseURL: "https://reqres.in/api/"
});

export const TOKEN_KEY = "@user-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

  const login = async (email, password) => {
    const response = await axios
      .post(api + "login", {
        email,
        password,
      });
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
    }
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
  }

  const register = async (email, password)  => {
    return await axios.post(api + "register", {
      email,
      password
    });
  }

  export default {
    register,
    login,
    logout,
  };