<template>
<div class="item-wrapper" @click="item.pressed()">
    <figure>
        <img height="40" width="40" :src="item.image">
    </figure>
</div>
</template>

<script>
export default {
    name: "item",
    props:{
        item:Object
    }
}
</script>

<style lang="scss" scoped>
    .item-wrapper{
      height: 45px;
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 15px;
      margin: auto;
      cursor: pointer;
      &:hover{
        border: 1px solid rgba(0,0,0,.3);
      }
      figure{
        height: max-content;
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
    }
</style>
