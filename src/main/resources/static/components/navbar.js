export default {
    template: `
        <nav>
            <div class="navMenu">
                <router-link class="nav-item" to="/">Home</router-link>      
                <router-link class="nav-item" to="/channels">Channels</router-link>        
            </div>
            <div class="infoDiv">
                <div class="text-block">
                <p>Welcome {{ user.username }}</p>    
                </div>
                <div class="text-block">
                <p v-for="(channel, index) in channels":key="channel.id" v-if="channel.id === currentChannel">Current Channel:<br> {{ channel.channelName }}</p>    
                </div>                
                <div class="nav-item" @click="logout">Logout</div>
            </div>
        </nav> 
    `,
    computed: {
        user() {
            return this.$store.state.user
        },
        channels() {
            return this.$store.state.channels
        },
        currentChannel() {
            return this.$store.state.currentChannel
        }
    },
    methods: {
        logout() {
            fetch("/logout")
            this.$router.push("/login")
            this.$store.commit("setUser", null)
            this.$store.commit("setCurrentChannel", null)
            this.$store.commit("setMessages", "")
        }
    },
}