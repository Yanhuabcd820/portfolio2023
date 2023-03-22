import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    ifDone:false,
    work_list:[]

  },
  getters: {
    work_list(state){
      return state.work_list
    },
    ifDone(state){
      return state.ifDone
    }
  },
  actions: {
    worksInit({commit}){
      return axios.get('./jsons/works.json').then(res=>{
        commit('init',res.data)
      }).catch(err=>console.log('error:',err.message))
    },
    ifDoneYes({commit}){
      commit('ifDoneYes',true)
    },
    ifDoneYet({commit}){
      commit('ifDoneYet',false)
    }
  },
  mutations: {
    init(state, data){
      state.work_list = data
      // console.log('state.work_list',state.work_list)
    },
    ifDoneYes(state,bolean){
      state.ifDone = bolean
      console.log('ifDoneYes',state.ifDone )
    },
    ifDoneYet(state,bolean){
      state.ifDone = bolean
      console.log('ifDoneYet',state.ifDone )
    }
  },
  modules: {
  }
})
