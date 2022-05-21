<template>
<div class="interactive-menu-wrapper" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp">
    <div :class="{'show':show}" class="interactive-menu">
        <template v-for="(item, key) in menuItems">
            <item :item="item" :key="key" @click="item.pressed"></item>
        </template>
    </div>
</div>
</template>

<script>
import Item from "./item"
export default {
    name: "interactive-menu",
    components:{
        Item
    },
    data(){
        return{
            sliding:false,
            enterWrapper:false,
            show:false,
            moving:false,
            isLoggedIn:false,
            positions: {
                startX:null,
                startY:null,
                endX:null,
                endY:null,
                x:null,
                y:null
            },
            menuItems:[
                {
                    name:"Add Word Or Phrase",
                    image:"https://img.icons8.com/plasticine/100/000000/add--v2.png",
                    pressed:()=>{this.$router.push('/english').catch(() => {})}
                }
            ]
        }
    },
    created() {
        window.addEventListener('mouseup', this.mouseUp)
    },
    mounted() {
        this.$store.dispatch('activeUser').then(user => {
            this.show = !!user
            this.isLoggedIn = !!user
        })
        const el = document.querySelector('.interactive-menu-wrapper');
        el.addEventListener('touchstart', this.mouseDown);
        el.addEventListener('touchend', this.mouseUp);
        el.addEventListener('touchcancel', this.mouseUp);
        el.addEventListener('touchmove', this.mouseMove);
    },
    destroyed() {
        window.removeEventListener('mouseup', this.mouseUp)
    },
    methods:{
        mouseEnter(){
            this.enterWrapper = true
        },
        mouseLeave(){
            this.enterWrapper = false
        },
        mouseDown(event){
            if(this.enterWrapper){
                this.positions.startY = event.screenY
                this.positions.startX = event.screenX
                this.moving = true
            }
        },
        mouseUp(event){
            if(!this.isLoggedIn) return

            if(this.moving){
                this.positions.endY = event.screenY
                this.positions.endX = event.screenX
                if(this.positions.endX > this.positions.startX + 5){
                    this.show = true
                }
                if(this.positions.endX < this.positions.startX - 5){
                    this.show = false
                }
            }

            this.moving = false
        },
        mouseMove(event){
            if(!this.isLoggedIn) return

            if(this.moving){

                if(event.screenX  > this.positions.startX + 5){
                    this.show = true
                }
                if(event.screenX  < this.positions.startX - 5){
                    this.show = false
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .interactive-menu-wrapper{
      position: fixed;
      left: 0;
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      top: 0;
      width: 10%;
      height: 100vh;
      background-color: transparent;
      z-index: 2;

      .interactive-menu{
        position: fixed;
        left: -100px;
        top: calc(5vh + 50px);
        width: 60px;
        height: 50vh;
        background-color: #fff;
        box-shadow: 10px 20px 30px rgba(230,230,230,.2);
        border: 1px solid rgba(230,230,230,.8);
        border-radius: 15px;
        z-index: 3;
        padding-block: 10px;
        display: block;
        transition: all 0.3s ease-in-out;
        &.show{
          left: 20px;
        }
      }
    }
</style>
