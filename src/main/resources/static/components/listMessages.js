export default {
    template: `
        <div>
            <h2>Messages</h2>
            <ul>
            <li v-for="msg of messages":key="msg.id">
            <strong>{{msg.sender}} : </strong>
            {{msg.text}}
            <span class="timestamp">{{formatTimestamp(msg.timestamp)}}</span>
            <hr>
            </li>    
            </ul>
        </div>
    `,
    computed: {
        messages() {
            return this.$store.state.messages
        }
    },
    methods: {
        formatTimestamp(timestamp) {
            let todaysDate = new Date()

            todaysDate.setHours(0, 0, 0, 0)

            let messageTimestamp = new Date(timestamp)

            if (messageTimestamp < todaysDate) {
                return messageTimestamp.toLocaleDateString()
            } else {
                return messageTimestamp.toLocaleTimeString().slice(0, 5)
            }
        }
    },
}