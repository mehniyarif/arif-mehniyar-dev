<template>
<div class="english-container">
    <span class="sentence" v-for="(value,key) in sentences" :key="key">{{value.sentence}}</span>
        <div class="sentence-container">
            <div class="sync-area">
                <figure @click="fetchRandomWord">
                    <img height="28" width="28" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/64/000000/external-refresh-arrows-dreamstale-lineal-dreamstale.png"/>
                </figure>
            </div>
            <div class="sentence-type">{{formData.type}}</div>
            <div class="base-word">{{formData.base_word}}</div>
            <efsane-form v-model="formData">
                <input id="sentence-value" name="sentence" type="text" :label="`${count+1}. Sentence (${formData.status})`"/>
                <button label="Add Sentence" color="info" @click="addSentence" :disabled="!formValidation"></button>
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
                sentence:null,
                base_word:"test",
                type:"",
                status:"positive"
            },
            count:0,
            sentences:[],
            statuses:[
                {
                    value:"positive",
                    name:"Positive"
                },
                {
                    value:"negative",
                    name:"Negative"
                },
                {
                    value:"question",
                    name:"Question"
                },
                {
                    value:"negative_question",
                    name:"Negative Question"
                }
            ],
            sentenceTypes:[],
            existsError:null
        }
    },
    created() {
        this.fetchSentenceTypes()
    },
    mounted() {
        this.fetchSentences()
        this.fetchRandomWord()
    },
    computed:{
        formValidation(){
            return !!this.formData.mean && !!this.formData.name
        }
    },
    methods:{
        randomStatus(){
            this.formData.status = this.statuses[Math.floor(Math.random()*this.statuses.length)]?.name
        },
        randomType(){
            this.formData.type= this.sentenceTypes[Math.floor(Math.random()*this.sentenceTypes.length)]?.name
        },
        addSentence(){
            if(!this.formData.sentence) return
            this.formData.sentence = this.formData.sentence.trim().toLowerCase()
            db.collection("sentences").where('name', '==', this.formData.sentence).get().then(snapshot => {
                if (snapshot.docs.length > 0){
                    this.existsError = `${this.formData.sentence} is exists`
                    setTimeout(()=>{
                        this.existsError = null
                    },2000)
                }else{
                    let collection = db.collection('sentences')
                    collection.add({...this.formData})
                    this.formData.sentence = null
                    document.getElementById('sentence-value').focus()
                    queueMicrotask(()=>{
                        this.fetchSentences()
                    })
                    queueMicrotask(()=>{
                        this.fetchRandomWord()
                    })
                }
            });
        },
        async fetchSentences(){
            let collection = db.collection('sentences')
            const snapshot = await collection.get();
            this.count = snapshot.size;

            collection.limit(15).onSnapshot((c)=>{
                this.sentences = []
                c.forEach((doc) => {
                    this.sentences.push(doc.data())
                });
            })
        },
        async fetchRandomWord(){
            this.$store.dispatch('wordapi/fetchRandomWord').then((response)=>{
                this.formData.base_word = response.word
            })
            queueMicrotask(()=>{
                this.randomType()
            })
            queueMicrotask(()=>{
                this.randomStatus()
            })
        },
        async fetchSentenceTypes(){

            this.sentenceTypes = []
            let collection = db.collection('sentence_types')

            await collection.limit(15).onSnapshot((c)=>{
                c.forEach((doc) => {
                    this.sentenceTypes.push(doc.data())
                });
                this.randomType()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .english-container{
      height: max-content;
      min-height: 100vh;
      width: 100%;
      position: relative;
      padding: 10px;
    }

    .sentence:not(:nth-child(1))::before{
      content: ", ";
    }

    .sync-area{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 15px;
      font-size: 1.4em;
      figure{
        cursor: pointer;
        padding-right: 15px;
      }
    }

    .base-word{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 15px;
      font-size: 1.4em;
      color: #48656c;
      border-bottom: 1px solid rgba(0,0,0,.1);
      height: 100px;
      line-height: 100px;
    }

    .sentence-type{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 15px;
      font-size: 1.2em;
      color: #ff6c7b;
      height: 80px;
      line-height: 80px;
    }

    .sentence-container{
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      left: 5%;
      width: 90%;
      top: 5%;
      height: max-content;
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
