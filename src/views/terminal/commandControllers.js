export default {
    methods:{
        historyClear(){
            this.history = []
        },
        login(){
            this.commandLine = {
                indicator:null,
                inputMode:null,
                setName:null,
                value:null
            }
            let loginKeys = Object.keys(this.commandSets.login)
            for (let i = 0; i < loginKeys.length; i++) {

                if(this.commandSets.login[loginKeys[i]]?.value) continue

                this.commandLine = {
                    indicator:this.commandSets.login[loginKeys[i]]?.indicator,
                    inputMode:this.commandSets.login[loginKeys[i]]?.inputMode ,
                    setName:"login",
                    value:null
                }
                break
            }

            if(this.commandSets.login.username.value && this.commandSets.login.password.value){
                this.loginController()
            }



        },
        loginController(){
            if(this.commandSets.login.username.value && this.commandSets.login.password.value){
                this.historyPush({
                    success:`successfully login`
                })
                this.clearSets()
            }else{
                this.historyPush({
                    error:`login failed`
                })
                this.clearSets()
            }
        }
    }
}
