const defaultUser = {
  emailVerified:false,
  registered: null,
  refreshToken:null,
  username:null,
  expiresIn:null,
}

const active_user_control = () => {
  if(JSON.parse(localStorage.getItem("userState"))){
    let myLocalStorage = JSON.parse(localStorage.getItem("userState"))
    for (const property of Object.keys(myLocalStorage)) {

      if (defaultUser[property] != null) {
        defaultUser[property] = myLocalStorage[property]
      }
    }
    return defaultUser;

  }else
  {
    return defaultUser;
  }
}

const state = {
  activeUser: active_user_control(),
  pageVisibility:true
}

export default state
