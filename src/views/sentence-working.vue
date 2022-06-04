<template>
    <div>
        {{word}}
    </div>
</template>

<script>

import {db} from "@/firebase"
export default {
    name: "english",
    data(){
        return{
            word:null
        }
    },
    mounted() {
        this.fetchWordSentences("hello")
    },
    computed:{
        formValidation(){
        }
    },
    methods:{
        async fetchWordSentences(word){
            this.$store.dispatch('xfEnglishApi/fetchWordSentences', {word}).then((response)=>{
                this.word = JSON.stringify(response, null, 2)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .english-container{
      height: 100vh;
      width: 100%;
      position: relative;
      padding: 10px;
    }

    .word:not(:nth-child(1))::before{
      content: ", ";
    }

    .word-container{
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      left: 5%;
      width: 90%;
      top: 30%;
      height: 40%;
      padding: 20px;
      border-radius: 5px;
      z-index: 2;

      @media (min-width: 768px) {
        left: 20%;
        width: 60%;
        top: 10%;
        height: 40%;
      }
      .error{
        color: #e32f2f;
      }
    }
</style>
