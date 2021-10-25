import { createStore } from "vuex";
import CommentService from "@/services/CommentService.js";
import axios from "axios";


export default createStore({
  state: {
    user: null, // new user
    comments: [], // new events array
    comment: {}
  },

  mutations: {//Update states => commit to store
    SET_USER_DATA(state, userData) {
      localStorage.setItem("user", JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
      state.user = userData 
    },

    ADD_COMMENT(state, comment) { // first mutation
      state.comments.push(comment)
    },
    
    SET_COMMENTS(state, comments){
      state.comments = comments
    },

    SET_COMMENT(state, comment){
      state.comment = comment
    }
  },

  actions: {//Before mutation
    signin({ commit }, credentials) {
      return axios
        .post("//localhost:3000/signin", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data)
        })
        .catch(error => {
        throw(error)
      })
    },

    login ({ commit }, credentials) {
      return axios
        .post("//localhost:3000/login", credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
      },

    createComment({ commit }, comment) {
      CommentService.postComment(comment)
      .then(() => {
        commit("ADD_COMMENT", comment)
      })
      .catch(error => {
        throw(error)
      })
    },

    fetchComments({ commit }){//when actions => dispatch
      return CommentService.getComments()//=> it run the API call
        .then(response => {
          commit("SET_COMMENTS", response.data)//then commit mutation to Vuex state
        })
        .catch(error => {
          throw(error)
        })
    },

    fetchComment({ commit, state }, id){
      const existingComment = state.comments.find(comment => comment.id === id)//check if already here => before API call
      if (existingComment){
        commit("SET_COMMENT", existingComment)
      } else {
        return CommentService.getComment(id)
          .then(response => {
            commit("SET_COMMENT", response.data)
          })
          .catch(error => {
            throw(error)
          })
      }
    }
  },


  modules: {
  }
})
