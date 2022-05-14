<template>
  <div v-click-outside-dropdown="close" @mouseleave="mouseLeaveButton" @mouseover="mouseEnterButton">
    <button :disabled="disabled" class="pg-dropdown-button" :style="cssVariables" @click="clickButton">
      <span >
        {{title}}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
    </button>
    <div class="pg-dropdown" v-show="showDropdown"  @click="quickClose">
      <div class="inner-dropdown">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pg-button-dropdown",
  components: {},
  data(){
      return{
        showDropdown:false,
        here:false
      }
  },
  props:{
    disabled:Boolean,
    border:Boolean,
    color:{
      type:String,
      default:'primary'
    },
    size:{
      type:String,
      default:'medium'
    },
    title:{
      type:String,
      default:'medium'
    },
    textColor:{
      type:String,
      required:false
    }
  },
  directives:{
    clickOutsideDropdown:{
      bind: function(el, binding) {
        const ourClickEventHandler = event => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;

        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      }
    },
  },
  methods:{
    quickClose(){
      this.here = false
      this.close()
    },
    close(event){
      if(!this.here){
        this.showDropdown = false
        this.$emit('hide-dropdown',event)
      }
    },
    mouseEnterButton(){
        this.here = true
    },
    mouseLeaveButton(event){
        this.here = false
        setTimeout(()=>{
          this.close()
        },5000)
    },
    clickButton(event){
        this.$emit('open-dropdown',event)
        this.showDropdown =!  this.showDropdown
    },
    pickColor(color){
      let colors = ["#007BFF", "#6C757D", "#28A745", "#DC3545", "#FFC107", "#17A2B8", "#fff", "#F8F9FA", "#343A40"]
      let definitions = ["primary",  "gray", "success", "danger", "warning", "info", "white", "light", "dark"]
      let ind = definitions.findIndex(v => v === color)

      if(ind > -1){
        color = colors[ind]
      }else if(this.color.startsWith("#") || this.color.startsWith("rgb")){
        color = this.color
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
    cssVariables(){
      let color = this.color ? this.pickColor(this.color) : "#007BFF"
      let textColor = this.textColor ? this.pickColor(this.textColor) :"#fff"

      if(["#6C757D","#FFC107", "#F8F9FA",  "#fff"].includes(color)){
        textColor = "#343A40"
      }
      return {
        "--pg-button-color": color,
        "--pg-button-height": this.pickSize(),
        "--pg-button-text-color": textColor,
        "--pg-button-border": this.border ? "1px solid rgba(0,0,0,.1)" : "none"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pg-dropdown-button{
  background-color: var(--pg-button-color);
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: calc(var(--pg-button-height) * .4);
  cursor: pointer;
  height: var(--pg-button-height);
  line-height: var(--pg-button-height);
  transition: all .2s ease;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-weight: 400;
  color: var(--pg-button-text-color);
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: var(--pg-button-border);
  text-transform: none;
  text-decoration: none;
  svg{
    height: calc(var(--pg-button-height) * .6);
    margin-left: 10px;
  }
  &:not(:disabled):hover{
    box-shadow: 1px 3px 8px rgba(0,0,0,.2);
  }
}
.pg-dropdown{
  position: relative;
  z-index: 2147483647;
  width: 0;
  display: block;
  .inner-dropdown{
    position: absolute;
    top: 0;
    left: 0;
    min-width: max-content;
    display: block;
    background-color: #fff;
    box-shadow: 5px 10px 15px rgba(0,0,0,.2);
    border-radius: 4px;
    max-width: max-content;
    height: max-content;
    padding-top: 5px;
    padding-bottom: 2px;
    overflow: hidden;
    margin-top: 5px;
    animation: topslide 0.3s ease-in-out;

    @keyframes topslide {
      0%{
        transform: translateY(25px);
      }
      100%{
        transform: translateY(2px);
      }
    }
  }
}
</style>
