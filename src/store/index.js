import { createStore } from "vuex";
import CommentService from "@/services/CommentService.js";


export default createStore({
  state: {
    user: "Kady", // new user
    comments: [], // new events array
    ecomment: {}
  },
  mutations: {//Update states => commit to store
    ADD_COMMENT(state, comment) { // first mutation
      state.comments.push(comment)
    },
    SET_COMMENT(state, comment){
      state.comment = comment
    },
    SET_COMMENTS(state, comments){
      state.comments = comments
    }
  },
  actions: {//Before mutation
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
