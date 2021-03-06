import {auth} from "@/firebase"
export default {
    methods:{
        historyClear(){
            this.history = []
            this.commandLine.value = null
            this.commandLine.indicator = null
            this.commandLine.setName = null
        },
        exit(){
            this.$router.push('/').catch(() => {})
        },
        english(){
            this.$router.push('/word-or-phrase').catch(() => {})
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
                this.loginFirebase()
            }
        },
        loginFirebase() {
            auth.signInWithEmailAndPassword(this.commandSets.login.username.value, this.commandSets.login.password.value)
                    .then(data => {
                        this.$store.dispatch('userUpdate', data)
                        this.historyPush({
                            success:`successfully login`
                        })
                        this.clearSets()
                    })
                    .catch(error => {
                        this.historyPush({
                            error:"Password or Username is Wrong"
                        })
                        this.clearSets()
                    });
        },
        logout(){
            auth.signOut()
                .then(data => {
                    this.$store.dispatch('logout')
                    this.historyPush({
                        success:`successfully log out`
                    })
                })
                .catch(error => {
                    this.historyPush({
                        error:error
                    })
                });
        },
    }
}
