<template>
<div class="english-container">
    <span class="word" v-for="(value,key) in words" :key="key">{{value.name}}</span>
        <div class="word-container">
            <efsane-form v-model="formData">
                <input name="name" type="text" label="Word or Phrase"/>
                <input name="mean" type="text" label="Mean"/>
                <button label="Add" color="info" @click="addWordOrPhrase" :disabled="!formValidation"></button>
            </efsane-form>
        </div>
</div>
</template>

<script>

import {db} from "@/firebase"
export default {
    name: "english",
    data(){
        return{
            formData:{
                name:null,
                mean:null,
                is_learned:false
            },
            words:[]
        }
    },
    mounted() {
        this.fetchWords()
    },
    computed:{
        formValidation(){
            return !!this.formData.mean && !!this.formData.name
        }
    },
    methods:{
        addWordOrPhrase(){
            let collection = db.collection('words')
            collection.add(this.formData)
            this.fetchWords()
            setTimeout(()=>{
                this.words = []
            },100)
        },
        fetchWords(){
            this.words = []
            let collection = db.collection('words')
            collection.onSnapshot((c)=>{
                c.forEach((doc) => {
                    this.words.push(doc.data())
                });
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .english-container{
      height: 100vh;
      width: 100%;
      display: flex;
      position: relative;
      .word:not(:last-child)::after{
          content: ", ";
      }
    }
    .word-container{
      position: absolute;
      left: 20%;
      width: 60%;
      top: 10%;
      height: 40%;
      background-color: transparent;
      z-index: 2;
    }
</style>
