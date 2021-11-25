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
  
export default {//Exporte méthode getComments
    getComments() {//return Axios API client created request comments
      return apiClient.get("/comments")//added onto base URL
    },
    getComment(id) {
      return apiClient.get("/comments/" + id)
    },
    postComment(comment) { // new post request
      return apiClient.post("/comments", comment)
    }
};