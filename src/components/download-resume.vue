<template>
    <div class='download-container'>
          <span class='btn' @click="downloadResume">Download Resume</span>
    </div>
</template>

<script>
export default {
    name: "download-resume",
    methods:{
        downloadResume(event){
            event.target.classList.add('btn__progress')
            setTimeout(function() {
                event.target.classList.add('btn__progress--fill')
            }, 500);
            setTimeout(function() {
                event.target.classList.remove('btn__progress--fill')
            }, 4100);
            setTimeout(function() {
                event.target.classList.add('btn__complete')
            }, 4400);
            setTimeout(function() {
                event.target.classList.remove('btn__complete')
                event.target.classList.remove('btn__progress')
            }, 10000);
            this.$emit('click',event)
        }
    }
}
</script>

<style lang="scss" >

// Button Variables
$btn-width: 150px;
$btn-padding: 12px;
$btn-radius: 3em;

@media (min-width:768px){
  $btn-width: 250px;
  $btn-padding: 15px;
}

// Flexy Container
   .download-container {
       display: flex;
       position: relative;
        height: 5.1em;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       text-align: center;


     @media (min-width:768px){
       position: fixed;
       bottom: 1%;
       right: 2%;
     }
// Button Styles
   .btn {
       background: rgba(156, 227, 255, 1);
       width: max-content;
       padding: $btn-padding;
       color: #1d1f20;
       border-radius: $btn-radius;
       border: 1px solid rgba(40, 189, 248, 0.68);
       box-shadow: 10px 15px 25px #fff;
       cursor: pointer;
       text-align: center;
       margin: 2em auto;
       transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
       transition-timing-function: cubic-bezier(0.600, -0.280, 0.735, 0.045);
        font-size: .8em;

     @media (min-width:768px){
       font-size: 1em;
     }
    &__progress {
         padding: $btn-padding;
         width: $btn-width + 50;
         color: transparent;

      @media (min-width:768px){
        width: $btn-width + 300;
      }
    &--fill {
    &:after {
         content: '';
         transform: translateY(-90%);
         position: absolute;
         display: block;
         background: #fff;
         padding: $btn-radius - 2;
         border-radius: $btn-radius;
         animation: fill 3.4s linear forwards;


     }
    }
    }
    &__complete {
         width: 2em ;
         color: transparent;
         display: flex;
         height: 4.1em;
         justify-content: center;
         font-size: 1em;
         padding: 10px;
         align-items: center;
         pointer-events: none;
    &:after {
         padding-top: .2em;
         content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACBUlEQVRIie2UTUhUURiGn3OvE/24adHPxpgWBVERaBJNEjMUhqUZpShUhAtdCEb7KNtE66mdSLgJglrU2GCkIdGmH8NCBf+gJGrjJpNG7pxzz9dmHKbbzDigiwhf+Dbne8/zng/OObCu/15qrUDtcw31WG4qnK6e3U/frmlAx1xDjQgvgE3AL4Vq6QknkgDOquFfGw+KkMjAAbYIcn+5v6qAttnGCqxNAltzlkXB9YIBzdLslgSfqdvmumbIWlshYskW9kZPuL83b0DbTG3T5tmFH1ema68Wg3dORMtFTNIYvdcYTba0vtcbTt7O9WYDLk3FDhlf91lfl1ur45cnY/F803SMVIUWXfXYt6ba9zXZMuZheE/kWtCfvUWt45EhhBO5TYEnKc+72H/4QwrgluBMjUceCLQGOIO+s1D/aP9EOhiQncCkl+5o4/3UxmO5jPHOhVyGz44d2QEwNloZTxuvNdejTXokFVIX8sH/mADgzPt9B1xxksCugO+zUuqZiHQF1qd12YaagcrR+XzwvwIATr8L7xQdSoBUF9qU0Xdxyo49Pzr5pZgp70uODoc3ljl+H9BSYN+CsjY6GPv2cYVDFPkqBHV8aHs3SHegs6QUp16dnH+9Erx4QEaRgfJOEe4CLqBFqaY3dYuJUuAlBQBU9YcqsRK1vno5el5/KhW+rn9DvwG6tezIncfOpAAAAABJRU5ErkJggg==");
         position: absolute;
         display: block;
     }
    }
    }

    // Animations
    @keyframes fill {
        from {
            width: 0;
        }
        to {
            width: 180px;
        }
    }
     @media (min-width:768px){
       // Animations
       @keyframes fill {
         from {
           width: 0;
         }
         to {
           width: 420px;
         }
       }
     }

}

</style>
