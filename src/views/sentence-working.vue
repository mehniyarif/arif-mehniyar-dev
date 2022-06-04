<template>
    <div class="sentences-working">
        <efsane-form v-model="formData" class="form-container">
            <input type="text" name="word" label="Word" @keyup.enter="fetchWordSentences"/>
            <button label="Search" color="info" @click="fetchWordSentences" :disabled="!formValidation"></button>
        </efsane-form>
        <pre v-html="examples">
        </pre>
    </div>
</template>

<script>

import {db} from "@/firebase"
export default {
    name: "english",
    data(){
        return{
            formData:{
                word:null,
                test:null
            },
            examples:null
        }
    },
    computed:{
        formValidation(){
            return !!this.formData.word
        }
    },
    methods:{
        async fetchWordSentences(){
            if(!this.formData.word) return

            this.$store.dispatch('xfEnglishApi/fetchWordSentences', {word:this.formData.word.trim()}).then((response)=>{
                this.examples = JSON.stringify(response, null, 2)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .sentences-working{
      height: 100vh;
      width: 100%;
      position: relative;
      padding: 10px;

      .form-container{
        margin-top: 15px;
      }
    }
</style>
