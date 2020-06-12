import getMessagesBtn from "../components/getMessagesBtn.js"
import listMessages from "../components/listMessages.js"
import chatMsgInputField from "../components/chatMsgInputField.js "
import listChannels from "../components/listChannels.js"
import getChannels from "../components/getChannels.js"
import addChannel from "../components/addChannel.js"

export default {
    template: `
        <body>
            <main>
                <!--<getMessagesBtn/>
                <getChannels/>-->
                <section class="channelSection">
                <h2>Channels</h2>
                    <listChannels/>
                    <addChannel/>
                </section>
                <section class="messageSection">
                    <listMessages/>
                    <div class="messageInputDiv">
                        <chatMsgInputField v-if="channel"/>                    
                    </div>
                </section>
            </main>
        </body> 
    `,
    components: {
        getMessagesBtn,
        getChannels,
        listChannels,
        chatMsgInputField,
        listMessages,
        addChannel
    },
    computed: {
        channel() {
            return this.$store.state.currentChannel
        }
    }

}