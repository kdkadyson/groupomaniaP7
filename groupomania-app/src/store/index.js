import { createStore } from "vuex";
import UserService from "@/services/UserService.js";
import CommentService from "@/services/CommentService.js";
import ProfileService from "@/services/ProfileService.js";

import axios from "axios";



export default createStore({
  state: {
    user: null, // new user
    comments: [], // new comments array
    comment: {},
    profiles: [],
    profile: {}
  },

  mutations: {//Update states => commit to store
    SET_USER_DATA(state, userData){
      state.user = userData
      localStorage.setItem("user", JSON.stringify(userData))//LS = string
      axios.defaults.headers["Authorization"] = `Bearer ${
        userData.token
      }`
    },

    CLEAR_USER_DATA(){
      localStorage.removeItem("user")
      location.reload()
    },

    ADD_COMMENT(state, comment) { // first mutation
      state.comments.push(comment)
    },
    
    SET_COMMENTS(state, comments){
      state.comments = comments
    },

    SET_COMMENT(state, comment){
      state.comment = comment
    },

    ADD_PROFILE(state, profile) { // first mutation
      state.profiles.push(profile)
    },

    SET_PROFILES(state, profiles){
      state.profiles = profiles
    },

    SET_PROFILE(state, profile){
      state.profile = profile
    }

  },

  actions: {//Before mutation
    signin({ commit }, credentials){
      UserService.postSignin(credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data)
        })
      .catch(error => {
        throw(error)
      })
    },

    login({ commit }, credentials){
      UserService.postLogin(credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data)
        })
      .catch(error => {
          throw(error)
      })
    },

    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
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
    },

    createProfle({ commit }, profile) {
      ProfileService.postProfile(profile)
      .then(() => {
        commit("ADD_PROFILE", profile)
      })
      .catch(error => {
        throw(error)
      })
    },

    fetchProfiles({ commit }){//when actions => dispatch
      return ProfileService.getProfiles()//=> it run the API call
        .then(response => {
          commit("SET_PROFILES", response.data)//then commit mutation to Vuex state
        })
        .catch(error => {
          throw(error)
        })
    },

    fetchProfile({ commit, state }, id){
      const existingProfile = state.profiles.find(profile => profile.id === id)//check if already here => before API call
      if (existingProfile){
        commit("SET_PROFILE", existingProfile)
      } else {
        return ProfileService.getProfile(id)
          .then(response => {
            commit("SET_PROFILE", response.data)
          })
          .catch(error => {
            throw(error)
          })
      }
    },
  },


  modules: {
  }
})
