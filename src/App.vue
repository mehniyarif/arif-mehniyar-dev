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
  background-color: #F8F8F8;
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
