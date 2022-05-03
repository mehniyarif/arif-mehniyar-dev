<template>
  <div id="app">
      <navbar></navbar>
      <router-view/>
      <download-resume @click="downloadResume"></download-resume>
  </div>
</template>

<script>
import Navbar from "@/components/navbar"
import DownloadResume from "@/components/download-resume";
export default {
    components: {Navbar,DownloadResume},
    methods:{
        downloadResume(){
            let copyDocument = window.document
            copyDocument.querySelector(".up-container").style.height = "100%"
            copyDocument.querySelector("#site-navbar").style.visibility = "hidden"
            copyDocument.querySelector(".download-container").style.visibility = "hidden"
            copyDocument.querySelector(".scroll-down").style.visibility = "hidden"
            window.print()
            copyDocument.querySelector(".up-container").style.height = "100vh"
            copyDocument.querySelector("#site-navbar").style.visibility = "visible"
            copyDocument.querySelector(".download-container").style.visibility = "visible"
            copyDocument.querySelector(".scroll-down").style.visibility = "visible"
        }
    }
}
</script>
<style lang="scss">
body{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(156,227,255,0.6815946771857444) 37%, rgba(156,227,255,1) 63%, rgba(248,248,248,1) 84%);
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
