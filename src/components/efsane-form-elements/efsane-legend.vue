<template>
<legend class="efsane-legend"> <img height="20" v-if="efsaneAttrs.base64Icon" :src="efsaneAttrs.base64Icon"> {{efsaneAttrs.label}}</legend>
</template>

<script>
export default {
  name: "efsane-legend",
  props:{
    efsaneAttrs:Object
  }
}
</script>

<style scoped>

</style>
