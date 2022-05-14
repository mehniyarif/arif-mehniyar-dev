<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import {auth, firebaseApp} from "./firebase"
export default {
    async created() {
        document.addEventListener('visibilitychange', ()=>{
            this.$store.dispatch('changePageVisibility', document.visibilityState)
        })
        this.getSecrets()

    },
    methods:{
        async getSecrets() {
            const token = await auth.currentUser.getIdToken();
            console.log(token)
        }
    }

}
</script>
<style lang="scss">
body{
  scrollbar-width: thin;
  scrollbar-color: #ccc;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }

}
@import "./assets/css/reboot.scss";
</style>
