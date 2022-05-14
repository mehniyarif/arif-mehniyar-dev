<template>
  <label v-bind="efsaneTextarea" :for="elementId">
    <span v-if="efsaneAttrs.label">{{efsaneAttrs.label}}
         <efsane-description-tooltip :tooltip="efsaneAttrs.description"></efsane-description-tooltip>
    </span>
    <textarea :id="elementId" v-bind="inputAttrs" v-on="efsaneEvents" :value="value" @input="(e)=>{$emit('input',e.target.value)}"></textarea>
  </label>
</template>

<script>
import Attrs from "./attrs";
import Methods from "./methods";
import EfsaneDescriptionTooltip from "./partials/efsane-description-tooltip";
export default {
  name: "efsane-textarea",
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
    inputAttrs(){
      let asArray = Object.entries(this.efsaneAttrs);
      let acceptAttrs = ["autocomplete",  "cols",  "dirname",  "disabled",  "form",  "maxlength",  "minlength",  "name",  "placeholder",  "readonly",  "required",  "rows",  "wrap"]
      let filtered = asArray.filter(([key, attr]) => acceptAttrs.includes(key))
      return Object.fromEntries(filtered)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "css/basic.scss";
</style>
