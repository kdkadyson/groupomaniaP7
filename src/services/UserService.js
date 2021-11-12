// API AXIOS INSTANCE (apiClient)
import axios from "axios"

const apiClient = axios.create({//Base URL for all calls
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {//for Authentification and Config.
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })

  export default {
    postSignin(signin) { // new post request
    return apiClient.post("/signin")
  }
};