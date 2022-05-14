const mutations = {
  UPDATE_USER_INFO(state, payload) {
    let userState = JSON.parse(localStorage.getItem("userState")) || {}
    userState['registered'] = true
    userState['refreshToken'] = payload?.user?.refreshToken
    userState['username'] = payload?.user?.email
    userState['emailVerified'] = payload?.user?.emailVerified

    state.activeUser = userState
    console.log(userState)
    console.log(payload)
    // Store data in localStorage
    localStorage.setItem("userState", JSON.stringify(userState))
  },
  SET_PAGE_VISIBILITY(state, payload) {
    state.pageVisibility = payload
  }
}

export default mutations

