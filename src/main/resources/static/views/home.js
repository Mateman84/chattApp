import getMessagesBtn from "../components/getMessagesBtn.js"
import listMessages from "../components/listMessages.js"
import chatMsgInputField from "../components/chatMsgInputField.js "
import listChannels from "../components/listChannels.js"
import getChannels from "../components/getChannels.js"
import addChannel from "../components/addChannel.js"

export default {
    template: `
        <body>    
            <h2>Home</h2>
                <!--<getMessagesBtn/>
                <getChannels/>-->
                <listChannels/>
                <addChannel/>
                <listMessages/>
                <chatMsgInputField v-if="channel"/>
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