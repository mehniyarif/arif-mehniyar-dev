<template>
  <div id="app">
      <navbar></navbar>
      <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar"
export default {
    components: {Navbar}
}
</script>
<style lang="scss">
body{
  background: rgb(191,237,255);
  background: radial-gradient(circle, rgba(191,237,255,0.3669879356127107) 0%, rgba(255,255,255,1) 52%, rgba(248,248,248,1) 100%);
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
