<template>
  <button type="button" :disabled="disableStatus" class="pg-button" :class="{'dropdown-button':dropdownButton}" :style="cssVariables" @click="clickButton" v-bind="buttonAttrs" v-on="efsaneEvents">
    <slot name="icon"></slot>
    <span v-if="efsaneAttrs.type !== 'icon'">
      <slot ></slot>
    </span>
    <figure v-if="efsaneAttrs.base64Icon">
      <img height="24"  :src="efsaneAttrs.base64Icon">
    </figure>
      {{efsaneAttrs.label}}
  </button>
</template>

<script>
export default {
  name: "pg-button",
  props:{
    disabled:Boolean,
    clickLock:Boolean,
    border:Boolean,
    color:{
      type:String,
      default:'primary'
    },
    efsaneAttrs:Object,
    efsaneEvents:Object,
    size:{
      type:String,
      default:'medium'
    },
    dropdownButton:Boolean,
    textColor:{
      type:String,
      required:false
    },
    dropdownTextColor:{
      type:String,
      required:false
    }
  },
  data(){
    return{
      clickedLock:false
    }
  },

  methods:{
    clickButton(event){
      this.$emit('click',event)
      if(this.clickLock){
        this.clickedLock = true
        setTimeout(()=>{
          this.clickedLock = false
        },10000)
      }
    },
    pickColor(color){
      let colors = ["#007BFF", "#6C757D", "#28A745", "#DC3545", "#FFC107", "#17A2B8", "#fff", "#F8F9FA", "#343A40"]
      let definitions = ["primary",  "gray", "success", "danger", "warning", "info", "white", "light", "dark"]
      let ind = definitions.findIndex(v => v === color)

      if(ind > -1){
        color = colors[ind]
      }else if(this.currentColor.startsWith("#") || this.currentColor.startsWith("rgb")){
        color = this.currentColor
      }

      return color
    },
    pickSize(){
      let size = ""
      let sizes = ["28px", "35px", "50px", "65px"]
      let definitions = ["small",  "medium", "large", "largest"]
      let ind = definitions.findIndex(v => v === this.size)

      if(ind > -1){
        size = sizes[ind]
      }

      return size
    },
  },
  computed:{
    currentColor(){
      return this.efsaneAttrs.color || this.color
    },
    currentTextColor(){
      return this.efsaneAttrs.textColor || this.textColor
    },
    buttonAttrs(){
      let asArray = Object.entries(this.efsaneAttrs);
      let acceptAttrs = ["disabled","color","textColor","name","type"]
      let filtered = asArray.filter(([key, attr]) => acceptAttrs.includes(key))
      return Object.fromEntries(filtered)
    },
    disableStatus(){
      return this.clickedLock ? this.clickedLock : this.disabled
    },
    cssVariables(){
      let color = this.currentColor ? this.pickColor(this.currentColor) : "#007BFF"
      let textColor = this.currentTextColor ? this.pickColor(this.currentTextColor) :"#fff"
      let dropdownTextColor = this.dropdownTextColor ? this.pickColor(this.dropdownTextColor) :"#343A40"

      if(["#6C757D","#FFC107", "#F8F9FA",  "#fff"].includes(color)){
        textColor = "#343A40"
      }
      return {
        "--pg-button-color": this.dropdownButton ? 'transparent' : color,
        "--pg-button-text-color": this.dropdownButton ? dropdownTextColor : textColor,
        "--pg-button-height": this.pickSize(),
        "--pg-button-border": this.border && !this.dropdownButton ? "1px solid rgba(0,0,0,.1)" : "none",
        "--pg-button-border-bottom": this.dropdownButton ? "1px solid rgba(0,0,0,.1)" : "none",
        "--pg-button-radius": this.dropdownButton ? "0" : "5px",
        "--pg-button-width": this.dropdownButton ? "100%" : "auto",
        "--pg-button-justify": this.dropdownButton ? "flex-start" : "center"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pg-button{
  background-color: var(--pg-button-color);
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: calc(var(--pg-button-height) * .4);
  cursor: pointer;
  align-self: flex-end;
  height: var(--pg-button-height);
  line-height: var(--pg-button-height);
  transition: all .2s ease;
  border-radius: var(--pg-button-radius);
  position: relative;
  overflow: hidden;
  width: var(--pg-button-width);
  font-weight: 400;
  color: var(--pg-button-text-color);
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: var(--pg-button-border);
  text-transform: none;
  text-decoration: none;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: var(--pg-button-justify);
  span{
    display: flex;
    align-items: center;
  }
  img{
    display: flex;
    align-items: center;
  }
  &:not(:disabled):hover{
    box-shadow: 1px 3px 8px rgba(0,0,0,.2);
    &.dropdown-button{
      text-shadow: 3px 5px 15px rgba(0,0,0,.2);
    }
  }

  &:disabled{
    opacity: .4;
    cursor: no-drop;
  }
  &:not(:nth-last-child(1)){
    border-bottom: var(--pg-button-border-bottom);
  }
}
</style>
