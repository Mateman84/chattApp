export default {
    template: `
        <div class="channelDiv">
            <ul>
            <li v-for="(channel, index) in channels":key="channel.id">
            <strong @click="joinChannel(index)">{{channel.channelName}}</strong>
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
    methods: {
        async joinChannel(index) {
            index += 1
            let channel = await fetch("/rest/channels/" + index)
            channel = await channel.json()
            this.id = index
            this.$store.commit("setCurrentChannel", index)
            let response = await fetch("/rest/messages/" + index);
            response = await response.json();
            this.$store.commit("setMessages", response)
            console.log(channel)
            console.log(this.id)
        }
    }
}