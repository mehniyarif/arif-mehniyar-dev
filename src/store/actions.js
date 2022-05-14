const actions = {
  changePageVisibility({ commit }, payload) {
    let status
    status = payload !== 'hidden';
    commit("SET_PAGE_VISIBILITY", status);
  },
  userUpdate({ commit }, payload){
    commit('UPDATE_USER_INFO', payload)
  }
}

export default actions
