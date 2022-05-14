const mutations = {
  UPDATE_USER_INFO(state, payload) {
    let userState = JSON.parse(localStorage.getItem("userState")) || {}
    userState['registered'] = true
    userState['refreshToken'] = payload?.user?.refreshToken
    userState['username'] = payload?.user?.email
    userState['emailVerified'] = payload?.user?.emailVerified

    state.activeUser = userState
    // Store data in localStorage
    localStorage.setItem("userState", JSON.stringify(userState))
  },
  LOG_OUT(state, payload) {
    let userState = {}
    userState['registered'] = false
    userState['refreshToken'] = null
    userState['username'] = null
    userState['emailVerified'] = null

    state.activeUser = userState
    // Store data in localStorage
    localStorage.removeItem("userState")
  },
  SET_PAGE_VISIBILITY(state, payload) {
    state.pageVisibility = payload
  }
}

export default mutations

