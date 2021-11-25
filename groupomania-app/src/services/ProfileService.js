// API AXIOS INSTANCE (apiClient)
import axios from "axios"

const apiClient = axios.create({//Base URL for all calls
  baseURL: "http://localhost:3000/api",
  withCredentials: false,
  headers: {//for Authentification and Config.
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})
  
export default {//Exporte méthode getProfiles
    getProfiles() {//return Axios API client created request profiles
      return apiClient.get("/staff")//added onto base URL
    },
    getProfile(id) {
      return apiClient.get("/profiles/" + id)
    },
    postProfile(profile) { // new post request
      return apiClient.post("/profiles", profile)
    }
};