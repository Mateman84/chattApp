export default {
    template: `
        <div class="channelDiv">
            <ul>
            <li v-for="(cha, index) in channels":key="cha.id">
            <strong @click="joinChannel(index)">{{cha.id}}: {{cha.channelName}}</strong>
            <hr>
            </li>    
            </ul>
        </div>
    `,
    computed: {
        channels() {
            return this.$store.state.channels
        }
    },
    data() {
        return {
            id: null
        }
    },
    methods: {
        async joinChannel(index) {
            index += 1
            let channel = await fetch("/rest/channels/" + index)
            channel = await channel.json()
            this.$store.commit("setCurrentChannel", index)
            let response = await fetch("/rest/messages/" + index);
            response = await response.json();
            this.$store.commit("setMessages", response)
            console.log(channel)
            console.log(this.id)
        }
    }
}