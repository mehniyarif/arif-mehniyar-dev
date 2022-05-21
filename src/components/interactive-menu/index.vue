<template>
<div class="interactive-menu-wrapper" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="eventMove" @mousedown="eventStart" @mouseup="eventEnd">
    <div :class="{'show':show}" class="interactive-menu" v-click-outside="close">
        <template v-for="(item, key) in menuItems">
            <item :item="item" :key="key"></item>
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
                    image:"https://img.icons8.com/fluency/96/000000/add-tag.png",
                    pressed:()=>{this.$router.push('/english').catch(() => {})}
                }
            ]
        }
    },
    created() {
        window.addEventListener('mouseup', this.eventEnd)
    },
    directives:{
        clickOutside:{
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
    mounted() {
        this.$store.dispatch('activeUser').then(user => {
            this.show = !!user
            this.isLoggedIn = !!user
        })
        const el = document.querySelector('.interactive-menu-wrapper');
        el.addEventListener('touchstart', this.eventStart);
        el.addEventListener('touchend', this.eventEnd);
        el.addEventListener('touchcancel', this.eventEnd);
        el.addEventListener('touchmove', this.eventMove);
    },
    destroyed() {
        window.removeEventListener('mouseup', this.eventEnd)
    },
    methods:{
        close(){
            if(!this.moving){
                this.show = false
            }
        },
        mouseEnter(){
            this.enterWrapper = true
        },
        mouseLeave(){
            this.enterWrapper = false
        },
        eventStart(event){
            if(event.type === "touchstart"){
                this.positions.startY = event.changedTouches[0].screenY
                this.positions.startX = event.changedTouches[0].screenX
            }
            else if(this.enterWrapper){
                this.positions.startY = event.screenY
                this.positions.startX = event.screenX
            }

            this.moving = true
        },
        eventEnd(event){
            if(!this.isLoggedIn) return

            if(this.moving){
                if(event.type === "touchend"){
                    this.positions.endY = event.changedTouches[0].screenY
                    this.positions.endX = event.changedTouches[0].screenX
                    if(this.positions.endX > this.positions.startX + 5){
                        this.show = true
                    }
                    if(this.positions.endX < this.positions.startX - 5){
                        this.show = false
                    }
                }else{
                    this.positions.endY = event.screenY
                    this.positions.endX = event.screenX
                    if(this.positions.endX > this.positions.startX + 5){
                        this.show = true
                    }
                    if(this.positions.endX < this.positions.startX - 5){
                        this.show = false
                    }
                }

            }

            setTimeout(()=>{
                this.moving = false
            },1000)
        },
        eventMove(event){
            if(!this.isLoggedIn) return

            if(this.moving){
                if(event.type === "touchmove"){
                    if(event.changedTouches[0].screenX  > this.positions.startX + 5){
                        this.show = true
                    }
                    if(event.changedTouches[0].screenX  < this.positions.startX - 5){
                        this.show = false
                    }
                }else{
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
      z-index: 21000;

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
        z-index: 21001;
        padding-block: 10px;
        display: block;
        transition: all 0.3s ease-in-out;
        &.show{
          left: 20px;
        }
      }
    }
</style>
