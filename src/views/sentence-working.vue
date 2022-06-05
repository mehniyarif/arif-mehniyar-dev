<template>
    <div class="sentences-working">
        <efsane-form v-model="formData" class="form-container">
            <input type="text" name="word" label="Word" @keyup.enter="fetchWordSentences"/>
            <button label="Search" color="info" @click="fetchWordSentences" :disabled="!formValidation"></button>
        </efsane-form>
        <div v-if="!!definitions.length" class="results">
            <h5>Pronunciation</h5>
            <ul>
                <li v-for="(item, key) in pronunciations" class="list-item" v-html="item.pronunciation"></li>
            </ul>
            <h5>Definitions</h5>
            <ol >
                <li v-for="(definition, key) in definitions" class="list-item">
                    <details open v-if="!!definition.examples">
                        <summary><b>{{definition.partOfSpeech}}</b>:  <span v-html="definition.definition"></span></summary>


                        <h6 class="list-item">Examples</h6>
                        <ul>
                            <li v-for="(example, key) in definition.examples" v-html="example" class="list-item"></li>
                        </ul>

                    </details>
                    <p v-else><b>{{definition.partOfSpeech}}</b>:  <span v-html="definition.definition"></span></p>

                    <div v-if="!!definition.synonyms.length">
                        <h6 class="list-item" >Synonyms</h6>
                        <ul>
                            <li v-for="(synonym, key) in definition.synonyms" v-html="synonym" class="list-item"></li>
                        </ul>
                    </div>

                    <div v-if="!!definition.antonyms.length">
                        <h6 class="list-item" >Antonyms</h6>
                        <ul>
                            <li v-for="(antonym, key) in definition.antonyms" v-html="antonym" class="list-item"></li>
                        </ul>
                    </div>

                    <div v-if="!!definition.inflectionalForms.length">
                        <h6 class="list-item" >inflectional Forms</h6>
                        <ul>
                            <li v-for="(inflectional, key) in definition.inflectionalForms" class="list-item">
                                <p> <b>type:</b> {{inflectional.type}}</p>
                                <p>
                                    <b>forms:</b>
                                    <ul>
                                        <li v-for="(form, key) in inflectional.forms" v-html="form"  class="list-item"></li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ol>
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
                word:"hello"
            },
            definitions:[],
            pronunciations:[]
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
                this.data = response.items
                if(!!response.items.length){
                    response.items.forEach((item)=>{
                        item.definitions.map((definition)=>{
                            definition.partOfSpeech = item.partOfSpeech
                            definition.synonyms = item.synonyms || []
                            definition.antonyms = item.antonyms || []
                            definition.inflectionalForms = item.inflectionalForms || []

                        })
                            this.definitions = this.definitions.concat(item.definitions)
                    })
                }
                if(!!response.pronunciations.length){
                    response.pronunciations.forEach((item)=>{
                        item.entries.forEach((entry)=>{
                            this.pronunciations = this.pronunciations.concat(entry.textual)
                        })
                    })

                }
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
      .results{
        margin-inline: 10%;
        margin-block: 15px;
      }
      .list-item{
        padding: 5px;
      }
    }
</style>
