<template>
  <fieldset :id="elementId" class="efsane-fieldset" :style="styles">
    <slot></slot>
  </fieldset>
</template>

<script>
import Methods from "./methods"
export default {
  name: "efsane-fieldset",
  mixins:[Methods],
  props:{
    efsaneAttrs:Object,
    gridTemplateAreas:{
      type:String,
      default:""
    },
  },
  data(){
    return{
      efsaneElements:[],
      elementId:this.makeId()
    }
  },
  computed:{
    styles(){
      return{
        "--efsane-fieldset-margin-top":CSS.px(parseInt(this.efsaneAttrs.marginTop) || parseInt(this.efsaneAttrs.margin) || 0),
        "--efsane-fieldset-margin-left":CSS.px(parseInt(this.efsaneAttrs.marginLeft) || parseInt(this.efsaneAttrs.margin) || 0),
        "--efsane-fieldset-margin-right":CSS.px(parseInt(this.efsaneAttrs.marginRight) || parseInt(this.efsaneAttrs.margin) || 0),
        "--efsane-fieldset-margin-bottom":CSS.px(parseInt(this.efsaneAttrs.marginBottom) || parseInt(this.efsaneAttrs.margin) || 0),
        "--efsane-fieldset-padding-top": this.efsaneAttrs.noBorder ? "none" : CSS.px(parseInt(this.efsaneAttrs.paddingTop) || parseInt(this.efsaneAttrs.padding) || 10),
        "--efsane-fieldset-padding-left": this.efsaneAttrs.noBorder ? "none" : CSS.px(parseInt(this.efsaneAttrs.paddingLeft) || parseInt(this.efsaneAttrs.padding) || 10),
        "--efsane-fieldset-padding-right": this.efsaneAttrs.noBorder ? "none" : CSS.px(parseInt(this.efsaneAttrs.paddingRight) || parseInt(this.efsaneAttrs.padding) || 10),
        "--efsane-fieldset-padding-bottom": this.efsaneAttrs.noBorder ? "none" : CSS.px(parseInt(this.efsaneAttrs.paddingBottom) || parseInt(this.efsaneAttrs.padding) || 10),
        "--efsane-fieldset-background-color": this.efsaneAttrs.color ? this.efsaneAttrs.color : this.efsaneAttrs.noBorder ? "transparent" : "rgba(245,245,245,.1)",
        "--efsane-fieldset-gap":CSS.px(this.efsaneAttrs.gap || 10),
        "--efsane-fieldset-border":this.efsaneAttrs.noBorder ? "none" : "1px solid rgba(0,0,0,.1)",
        [`--efsane-fielset-grid-template-${this.fieldsetKey}`]:this.gridTemplateAreas,
        "grid-template-areas":`var(--efsane-fielset-grid-template-${this.fieldsetKey})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "css/basic.scss";
</style>
