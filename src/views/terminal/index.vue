<template>
    <div>
        <section class="window window--maximized" ref="window" @click="focus">
            <main class="window-content" >
                <template v-for="(line, key) in history">
                    <div :key="key" class="window-cursor" v-if="line.success">
                        <span class="i-cursor-indicator success">{{ line.success }}</span>
                    </div>
                    <div :key="key" class="window-cursor" v-else-if="line.error">
                        <span class="i-cursor-indicator error">{{ line.error }}</span>
                    </div>
                    <div :key="key"  class="window-cursor" v-else>
                        <span class="i-cursor-indicator">arif.mehniyar.com ></span>
                        <span class="i-cursor-indicator title-indicator" v-if="line.indicator">{{ line.indicator }}:</span>
                        <input disabled  :type="line.inputMode" :inputmode="line.inputMode" :value="line.value" class="window-input js-prompt-input" />
                    </div>
                </template>
                <div class="window-cursor">
                    <span class="i-cursor-indicator">arif.mehniyar.com ></span>
                    <span class="i-cursor-indicator title-indicator" v-if="commandLine.indicator">{{ commandLine.indicator }}:</span>

                    <textarea v-if="!commandLine.inputMode" autoresize ref="input" v-model.trim="commandLine.value" @keyup.enter="mouseEnter"  @keyup="typing"  class="window-input js-prompt-input"> </textarea>
                    <input v-else ref="input" v-model.trim="commandLine.value" @keyup.enter="mouseEnter"  @keyup="typing" :type="commandLine.inputMode" :inputmode="commandLine.inputMode" class="window-input js-prompt-input"/>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
import CommandControllers from "./commandControllers";
export default {
    name: "terminal",
    mixins:[CommandControllers],
    data(){
      return{
          history:[],
          commandLine:{
            indicator:null,
            setName:null,
            value:null
          },
          commands:["clear","login","logout"],
          commandMethods:["historyClear","login", "logout"],
          commandSets: {
              login:{username:{indicator:"username", inputMode:"text", value:null},password:{indicator:"password", inputMode:"password", value:null}}
            }
          }
    },
    mounted() {
        let resizingTextareas = [].slice.call(document.querySelectorAll('textarea[autoresize]'));

        resizingTextareas.forEach(function(textarea) {
            textarea.addEventListener('input', autoresize, false);
        });

        function autoresize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight+'px';
            this.scrollTop = this.scrollHeight;
            window.scrollTo(window.scrollLeft,(this.scrollTop+this.scrollHeight));
        }
        document.addEventListener('keyup',this?.keyUpController)
    },
    destroyed() {
        document.removeEventListener('keyup',this?.keyUpController)
    },
    methods:{
        focus() {
            this.$refs.input?.focus()
        },
        minimize() {
            this.$refs.window.classList.remove("window--maximized")
            this.$refs.window.classList.toggle("window--minimized")
        },
        maximize() {
            this.$refs.window.classList.remove("window--minimized")
            this.$refs.window.classList.toggle("window--maximized")
            this.focus()
        },
        close() {

            this.$refs.window.classList.add("window--destroyed")
            this.$refs.window.classList.remove("window--maximized")
            this.$refs.window.classList.remove("window--minimized")
            this.commandLine.value = null
            this.$router.push('/').catch(() => {})
        },
        open() {
            this.$refs.window.classList.remove("window--destroyed")
            this.focus()
        },
        mouseEnter(event){
            this.controllerCommands(event)
        },
        typing(event){
            event.target.height = "100px"
        },
        translateHistory(){
            let convertedHistory = []
            this.history.forEach((his)=>{
                if(his.success){
                    let obj = his
                    obj.value = his.success
                    convertedHistory.push(obj)
                }else if(his.error){
                    let obj = his
                    obj.value = his.error
                    convertedHistory.push(obj)
                }else{
                    convertedHistory.push(his)
                }
            })
            convertedHistory.push({...this.commandLine, id:this.makeId()})
            return convertedHistory
        },
        keyUpController(event){
            let currentHistoryId = this.commandLine?.id
            let currentIndex = this.history.findIndex(v => v.id === currentHistoryId)
            switch (event.code){
                case "ArrowDown":
                    if(!this.history || this.history?.length === 0) return
                    this.commandLine = this.translateHistory()[currentIndex +1] || this.history[0] || this.commandLine

                    break;
                case "ArrowUp":
                    if(!this.history || this.history?.length === 0) return
                    this.commandLine = this.translateHistory()[currentIndex -1] || this.history.at(-1) || this.commandLine
                    break;
                case "KeyC":
                    if(event.ctrlKey){
                        this.clearSets()
                        this.historyPush({error:"Command Exist"})
                        this.commandLine.indicator = null
                        this.commandLine.setName = null
                        this.commandLine.inputMode = null
                    }
                    break;

            }

            this.focus()

        },
        makeId(){
            let length = Math.floor(Math.random() * 30)
            let result           = ["id"];
            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result.push(characters.charAt(Math.floor(Math.random() *
                    charactersLength)));
            }
            return result.join('');
        },
        historyPush(obj){
            this.history.push({...obj, id:this.makeId()})
            this.commandLine.value = null
            setTimeout(()=>{
                this.focus()
            },0)
        },
        clearSets(){
            let newCommandSets = this.commandSets
            Object.entries(newCommandSets).forEach(([setKey, setValue])=>{
                Object.entries(setValue).forEach(([itemKey,itemValue])=>{
                    newCommandSets[setKey][itemKey].value = null
                })
            })
        },
        controllerCommands(event){
            if(this.commandLine?.value && this.commandLine?.setName && this.commandLine?.indicator){
                this.commandSets[this.commandLine?.setName][this.commandLine?.indicator].value = this.commandLine?.value
            }

            let lastCommadLine = {...this.commandLine}
            let lastCommand = this.commandLine.value?.trim().toLowerCase()
            if(this.commands.includes(lastCommand) || this.commands.includes(this.commandLine.setName)){
                let index = this.commands.findIndex(v => v === lastCommand)
                let command = this.commandLine.setName || this.commandMethods[index]
                setTimeout(()=>{
                    this.$store.dispatch('activeUser').then(user => {
                        if(user || ['login','clear'].includes(command)){
                            this[command]()
                        }else{
                            this.historyPush({
                                success:`you must be login`
                            })
                        }
                    })
                },0)

                this.historyPush(lastCommadLine)
            }else{
                if(this.commandLine.value){
                    this.historyPush({
                        error:`${this.commandLine.value} is not recognized command`
                    })
                }
            }


        }
    }
}
</script>

<style lang="scss" scoped>
.window {
    width: 450px;
    height: 100vh;
    padding-bottom: 70px;
    padding-top: 30px;
    background-color: #000;
    transition: all ease-in-out 0.3s;
    overflow: hidden;
}
.window.window--maximized {
  width: 100%;
  flex-grow: 1;
}
.window.window--minimized {
  height: 25px;
  width: 180px;
}
.window.window--minimized .window-content {
  display: none;
}
.window-content{
  max-height: 70vh;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc;
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
}
.window.window--destroyed {
  opacity: 0;
  width: 0;
  height: 0;
}
.window-header {
  background-color: #eee;
  height: 25px;
}
.window-controls {
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
}
.window-controls .control-item {
  width: 25px;
  height: 25px;
  text-align: center;
  color: #333;
  transition: all ease-in 0.15s;
  cursor: pointer;
}
.window-controls .control-item:hover {
  background-color: #ccc;
}
.control-item.control-close {
  font-size: 25px;
  font-weight: 500;
  line-height: 19px;
}
.control-item.control-close:hover {
  background-color: #ec6060;
  color: #fff;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 20px;
}
.control-item.control-maximize {
  font-size: 25px;
  line-height: 19px;
}
.control-item.control-minimize {
  font-size: 25px;
  line-height: 19px;
}
.window-cursor {
  display: flex;
  margin: 5px;
}
.window-cursor .i-cursor-indicator {
  color: #fff;
  font-size: 1em;
  height: 1.1em;
  line-height: 1em;
  opacity: .8;
  font-family: 'Consolas', monospace;
  margin: 0 2px 0 5px;

  &.title-indicator{
    color: #63a4fc;
  }
  &.success{
    color: #3bfa94;
  }
  &.error{
    color: #f57213;
  }
}
.window-cursor .i-cursor-underscore {
  width: 10px;
  height: 3px;
  background-color: #fff;
  align-self: flex-end;
  margin-right: 5px;
  -webkit-animation: blink 1s steps(2, start) infinite;
  animation: blink 1s steps(2, start) infinite;
}
.window-input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: inherit;
  border: none;
  line-height: 1em;
  width: 5px;
  outline: 0;
  color: transparent;
  text-shadow: 0 0 0 #fff;
  font-family: 'Consolas', monospace;
  flex: 1;
  height: 1.1em;
  max-height: max-content;
  text-decoration: none !important;
  overflow: hidden;
  resize: none;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  caret-color: #fff;
  outline: none;
  &:hover,
  &:focus{
    text-decoration: none !important;
  }
}
textarea[autoresize] {
  display: block;
  overflow: hidden;
  resize: none;
}
.window-input:focus {
  outline: none;
  text-decoration: none !important;
}
@-webkit-keyframes blink {
  to {
    visibility: hidden;
  }
}
@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
