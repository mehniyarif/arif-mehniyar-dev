<template>
<div class="english-container">
    <span class="word" v-for="(value,key) in words" :key="key">{{value.name}}</span>
        <div class="word-container">
            <efsane-form v-model="formData">
                <input name="name" type="text" :label="`${count+1}. Word or Phrase`"/>
                <input name="mean" type="text" label="Mean" @keyup.enter="addWordOrPhrase"/>
                <button label="Add" color="info" @click="addWordOrPhrase" :disabled="!formValidation"></button>
            </efsane-form>
            <div class="error" v-show="existsError">{{existsError}}</div>
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
            count:0,
            words:[],
            existsError:null
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
            if(!this.formData.mean || !this.formData.name) return
            this.formData.name = this.formData.name.trim().toLowerCase()
            db.collection("words").where('name', '==', this.formData.name).get().then(snapshot => {
                if (snapshot.docs.length > 0){
                    this.existsError = `${this.formData.name} is exists`
                    setTimeout(()=>{
                        this.existsError = null
                    },2000)
                }else{
                    let collection = db.collection('words')
                    collection.add(this.formData)
                    this.formData.mean = null
                    this.formData.name = null
                    this.fetchWords()
                }
            });
        },
        fetchWords(){
            let collection = db.collection('words')
            collection.onSnapshot((c)=>{
                this.words = []
                c.forEach((doc) => {
                    this.count = c.docs.length
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
      position: relative;
      padding: 10px;
    }

    .word:not(:nth-child(1))::before{
      content: ", ";
    }

    .word-container{
      position: absolute;
      left: 20%;
      background-color: rgba(255, 255, 255, 0.9);
      width: 60%;
      top: 10%;
      height: 40%;
      padding: 20px;
      border-radius: 5px;
      z-index: 2;
      .error{
        color: #e32f2f;
      }
    }
</style>
