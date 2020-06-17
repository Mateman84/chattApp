export default {
    template: `
     <form @submit.prevent="addChannel"> 
         <input :disabled="!this.user" v-model="channelname" type="text" channeName="Enter Name" placeholder="Enter Channel Name...">
         <button :disabled="!this.user">Add Channel</button>
     </form>
    `,
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    data() {
        return {
            channelname: ``
        }
    },
    methods: {
        //Löste mitt problem 
        async addChannel() {
            let channel = {
                name: this.channelname
            }
            let result = await fetch('/rest/channels/' + this.channelname, { //Var
                /* C - POST
                R - 
                U - PUT
                D - DELETE */
                method: 'POST', // VAD,  När man skickar med en options som en andra parameter i fetch så kan vi här specificera hur vi ska prata med servern
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(channel)
            })
            console.log(result)
            console.log(channel)

            result = await result.json()

            //this.$store.commit('appendChannel', result)
            this.fetchChannels()

            this.channelname = ''
        },
        async fetchChannels() {
            let response = await fetch("/rest/channels");

            response = await response.json();

            this.$store.commit("setChannels", response)
        }
    }
}