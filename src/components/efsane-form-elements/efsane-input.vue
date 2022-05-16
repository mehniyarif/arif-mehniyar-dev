<template>
  <label v-bind="efsaneInput" :for="efsaneAttrs.id || elementId">
    <span v-if="efsaneAttrs.label">{{efsaneAttrs.label}}
         <efsane-description-tooltip :tooltip="efsaneAttrs.description"></efsane-description-tooltip>
    </span>
    <input :id="efsaneAttrs.id || elementId" v-bind="inputAttrs" v-on="efsaneEvents" :value="value" @input="(e)=>{$emit('input',e.target.value)}">
  </label>
</template>

<script>
import Attrs from "./attrs";
import Methods from "./methods";
import EfsaneDescriptionTooltip from "./partials/efsane-description-tooltip";
export default {
  name: "efsane-input",
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
    value: {}
  },
  computed:{
    inputAttrs(){
      let asArray = Object.entries(this.efsaneAttrs);
      let acceptAttrs = ["accept","id", "alt", "checked", "dirname","disabled", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "width", "type"]
      let filtered = asArray.filter(([key, attr]) => acceptAttrs.includes(key))
      return Object.fromEntries(filtered)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "css/basic.scss";
</style>
