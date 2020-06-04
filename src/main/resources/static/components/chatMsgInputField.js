export default {
    template: `
     <form @submit.prevent="sendMsg"> 
         <input :disabled="!this.user" v-model="msgText" type="text" name="Enter Message" placeholder="Enter message here...">
         <button :disabled="!this.user">Send</button>
     </form>
    `,
    computed: {
        user() {
            return this.$store.state.user
        },
        channel() {
            return this.$store.state.currentChannel
        }
    },
    data() {
        return {
            msgSender: ``,
            msgText: ``,
            msgDate: ``,
            msgChannel: null
        }
    },
    methods: {
        async sendMsg() {
            console.log(this.channel)
            let message = {
                sender: this.user.username,
                text: this.msgText,
                timestamp: Date.now(),
                channelId: this.channel
            }
            let result = await fetch('/rest/messages', { //Var
                /* C - POST
                R - 
                U - PUT
                D - DELETE */
                method: 'POST', // VAD,  När man skickar med en options som en andra parameter i fetch så kan vi här specificera hur vi ska prata med servern
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            })
            console.log(message)
            console.log(result)
            result = await result.json()

            //this.$store.commit('appendMsg', result)

            this.msgText = ''
        }
    },
}