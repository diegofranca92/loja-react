import axios from "axios";

const API_URL = "https://reqres.in/api/";

export const TOKEN_KEY = "ok";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

class AuthService {
  async login(username, password) {
    return await axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    return await axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();