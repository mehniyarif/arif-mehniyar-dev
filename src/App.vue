<template>
  <div id="app">
      <interactive-menu></interactive-menu>
      <router-view/>
      <div class="app-version">v{{version}}</div>
  </div>
</template>

<script>
const version = process.env.VUE_APP_VERSION
import InteractiveMenu from "@/components/interactive-menu";
export default {
    components: {
        InteractiveMenu
    },
    data(){
      return{
          version
      }
    },
    async created() {
        document.addEventListener('visibilitychange', ()=>{
            this.$store.dispatch('changePageVisibility', document.visibilityState)
        })

    }

}
</script>
<style lang="scss">
body{
  scrollbar-width: thin;
  scrollbar-color: #ccc;
  width: 100vw;
  overflow: auto;
  overflow-x: hidden;

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
  .app-version{
    display: flex;
    justify-content: center;
    margin: 10px;
  }

}
@import "./assets/css/reboot.scss";
</style>
