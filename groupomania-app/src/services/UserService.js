// API AXIOS INSTANCE (apiClient)
import axios from "axios"

const apiClient = axios.create({//Base URL for all calls
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
    headers: {//for Authentification and Config.
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })

export default {
  postSignin() { // new post request
    return apiClient.post("/signin")
  },

  postLogin() { // new post request
    return apiClient.post("/login")
  }
};