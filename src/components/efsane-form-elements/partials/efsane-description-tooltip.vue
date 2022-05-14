<template>
    <span class="efsane-form-tooltip" :data-tooltip="tooltip" v-if="tooltip">&nbsp;</span>
</template>

<script>
export default {
  name: "efsane-description-tooltip",
  props:{
    tooltip:String
  },
}
</script>

<style lang="scss" >

:root{
  --tooltip-height:1.3em;
  --triangle-height:.5em;
  --text-height:1em
}

.efsane-form-tooltip {
  display: inline;
  position: relative;
  width: 2em;
  height: var(--tooltip-height);
  cursor: help;
  transition: all 0.3s ease-in-out;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2330AADD' d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  margin-bottom: .2em;
}
.efsane-form-tooltip:hover:after{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  background: #343A40;
  border-radius: .5em;
  color: #fdfdfd;
  content: attr(data-tooltip);
  font-size: var(--text-height);
  padding: .5em var(--text-height);
  line-height: var(--text-height);
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  min-height: var(--text-height);
  min-width: 4em;
  width: max-content;
  max-width: 25vw;
  animation: .4s fadeIn;
  z-index: 99999999999;
  animation-fill-mode: forwards;
  position: absolute;
  left: 0;
  bottom: calc(var(--tooltip-height) + var(--triangle-height));
}
.efsane-form-tooltip:hover:before{
  border: solid;
  border-color: #444 transparent;
  border-width: var(--triangle-height) calc(var(--triangle-height) / 2) 0 calc(var(--triangle-height) / 2) ;
  content: "";
  left: 50%;
  bottom: var(--tooltip-height);
  position: absolute;
  animation: .4s fadeIn;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
</style>
