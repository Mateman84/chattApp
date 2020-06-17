import listMessages from "../components/listMessages.js"
import chatMsgInputField from "../components/chatMsgInputField.js "
import listChannels from "../components/listChannels.js"
import addChannel from "../components/addChannel.js"

export default {
    template: `
        <body>
            <main>
                <section class="channelSection">
                <h2>Channels</h2>
                    <listChannels/>
                    <addChannel/>
                </section>
                <section class="messageSection">
                    <listMessages/>
                    <div class="messageInputDiv">
                        <chatMsgInputField v-if="channels"/>                    
                    </div>
                </section>
            </main>
        </body> 
    `,
    components: {
        listChannels,
        chatMsgInputField,
        listMessages,
        addChannel
    },
    computed: {
        channels() {
            return this.$store.state.channels
        }
    }

}