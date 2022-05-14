<template>
  <label v-bind="efsaneSelect" :for="elementId">
    <span v-if="efsaneAttrs.label">{{efsaneAttrs.label}}
         <efsane-description-tooltip :tooltip="efsaneAttrs.description"></efsane-description-tooltip>
    </span>
    <select :id="elementId" v-bind="selectAttrs" v-on="efsaneEvents" :value="value" @input="(e)=>{$emit('input',e.target.value)}">
      <option selected :disabled="!efsaneAttrs.selectablePlaceholder" value="">{{efsaneAttrs.placeholder}}</option>
      <option :value="optionValue(option)" :selected="optionValue(option) === value" v-for="(option, key) in options">{{optionLabel(option)}}</option>
    </select>
  </label>
</template>

<script>
import Attrs from "./attrs";
import Methods from "./methods";
import EfsaneDescriptionTooltip from "./partials/efsane-description-tooltip";
export default {
  name: "efsane-select",
  mixins:[Attrs, Methods],
  components:{
    EfsaneDescriptionTooltip
  },
  data(){
    return {
      elementId: this.makeId()
    }
  },
  props:{
    efsaneAttrs:Object,
    efsaneEvents:Object,
    value:{}
  },
  computed:{
    options(){
      if(!'options' in this.efsaneAttrs) return []
      return this.efsaneAttrs.options
    },
    selectAttrs(){
      let asArray = Object.entries(this.efsaneAttrs);
      let acceptAttrs = ["form","disabled","form","multiple","name","required","type"]
      let filtered = asArray.filter(([key, attr]) => acceptAttrs.includes(key))
      return Object.fromEntries(filtered)
    }
  },
  methods:{
    optionLabel(data){
      if(!this.efsaneAttrs?.optionLabel) return data
      let optionLabel = this.efsaneAttrs.optionLabel || 'label'
      return data[optionLabel]
    },
    optionValue(data){
      if(!this.efsaneAttrs?.optionValue) return data
      let optionValue = this.efsaneAttrs.optionValue || 'value'
      return data[optionValue]
    },
  }
}
</script>


<style lang="scss" scoped>
@import "css/basic.scss";
</style>
