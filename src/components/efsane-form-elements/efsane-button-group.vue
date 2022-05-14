<template>
<div class="pg-button-group" :style="styles">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "pg-button-group",
  props:{
    justify:{
      type:String,
      default:"left"
    }
  },
  computed:{
    styles(){
      return{
        "--pg-button-group-justify": this.justify === 'right' ? 'flex-end' : this.justify === 'center' ? 'center' : 'flex-start'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pg-button-group{
    display: inline-flex;
    justify-content: var(--pg-button-group-justify);
    align-items: center;
    gap: 4px;
    width: max-content;
    height: max-content;
    margin-top: 5px;
    margin-bottom: 20px;
  }
</style>
