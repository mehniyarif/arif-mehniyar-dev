import {auth} from "@/firebase";

const actions = {
  changePageVisibility({ commit }, payload) {
    let status
    status = payload !== 'hidden';
    commit("SET_PAGE_VISIBILITY", status);
  },
  userUpdate({ commit }, payload){
    commit('UPDATE_USER_INFO', payload)
  },
  activeUser() {
    return auth.currentUser
  },
  logout({ commit }, payload){
    commit('LOG_OUT', payload)
  }
}

export default actions
