<template>
  <div id="app">
      <interactive-menu></interactive-menu>
      <router-view/>
  </div>
</template>

<script>
import InteractiveMenu from "@/components/interactive-menu";
export default {
    components: {
        InteractiveMenu
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
