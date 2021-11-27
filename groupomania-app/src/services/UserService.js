import axios from "axios";
import authHeader from "./Auth-header";

const apiClient = "http://localhost:3000/api/test";

//Service to acces User data
class UserService {
  getPublicContent() {
    return axios.get(apiClient + "all");
  }
  getUserBoard() {
    return axios.get(apiClient + "user", { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(apiClient + "admin", { headers: authHeader() });
  }
}

export default new UserService();