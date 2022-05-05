<template>
    <div>
        <section class="window" ref="window" @click="focus">
            <header class="window-header">
                <nav class="window-controls">
                    <span @click="minimize" class="control-item control-minimize js-minimize">‒</span>
                    <span @click="maximize" class="control-item control-maximize js-maximize">□</span>
                    <span @click="close" class="control-item control-close js-close">˟</span>
                </nav>
            </header>
            <main class="window-content" >
                <div class="window-cursor" v-for="(value, key) in history">
                    <span class="i-cursor-indicator">arif.mehniyar.com:</span>
                    <input :value="value" type="text" class="window-input js-prompt-input" />
                </div>
                <div class="window-cursor">
                    <span class="i-cursor-indicator">arif.mehniyar.com:</span>
                    <textarea autoresize ref="input" @keyup.enter="mouseEnter" autofocus autocomplete="on" cols="0" @keyup="typing" type="text" class="window-input js-prompt-input" > </textarea>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
export default {
    name: "terminal",
    data(){
      return{
          history:[],
          commands:["clear"],
          commandMethods:["historyClear"]
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
        document.addEventListener('keyup',this?.focus)
    },
    methods:{
        focus: function() {
            this.$refs.input?.focus()
        },
        minimize: function() {
            this.$refs.window.classList.remove("window--maximized")
            this.$refs.window.classList.toggle("window--minimized")
        },
        maximize: function() {
            this.$refs.window.classList.remove("window--minimized")
            this.$refs.window.classList.toggle("window--maximized")
            this.focus()
        },
        close: function() {

            this.$refs.window.classList.add("window--destroyed")
            this.$refs.window.classList.remove("window--maximized")
            this.$refs.window.classList.remove("window--minimized")
            this.$refs.input.value = ""
            this.$router.push('/').catch(() => {})
        },
        open: function() {
            this.$refs.window.classList.remove("window--destroyed")
            this.focus()
        },
        mouseEnter(event){
            this.history.push(event.target.value)
            this.controllerCommands()
            setTimeout(()=>{
                this.$refs.input.value = ""
            })
        },
        typing(event){
            event.target.height = "100px"
        },
        controllerCommands(){
            let lastCommand = this.history.at(-1)
            lastCommand = lastCommand.trim().toLowerCase()
            if(this.commands.includes(lastCommand)){
                let index = this.commands.findIndex(v => v === lastCommand)
                let command = this.commandMethods[index]
                this[command]()
            }
        },
        historyClear(){
            this.history = []
        }
    }
}
</script>

<style lang="scss" scoped>
.window {
    width: 450px;
    min-height: 250px;
    height: max-content;
    max-height: 70vh;
    padding-bottom: 70px;
    background-color: rgba(37, 37, 37, 0.85);
    border: 1px solid #c9c9c9;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
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
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
.control-item.control-close:hover {
  background-color: #ec6060;
  color: #fff;
}
.control-item.control-maximize {
  line-height: 19px;
}
.control-item.control-minimize {
  line-height: 22px;
}
.window-cursor {
  display: flex;
  margin: 5px;
}
.window-cursor .i-cursor-indicator {
  color: #fff;
  font-size: 1em;
  font-family: 'Consolas', monospace;
  margin: 0 2px 0 5px;
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
  width: 5px;
  outline: 0;
  color: transparent;
  text-shadow: 0 0 0 #fff;
  font-family: 'Consolas', monospace;
  flex: 1;
  height: 24px;
  max-height: max-content;
  text-decoration: none !important;
  overflow-y: hidden;
  resize: none;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  caret-color: #fff;
}
textarea[autoresize] {
  display: block;
  overflow: hidden;
  resize: none;
}
.window-input:focus {
  outline: none;
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
