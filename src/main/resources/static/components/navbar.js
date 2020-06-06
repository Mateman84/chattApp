export default {
    template: `
        <nav>
            <div class="navMenu">
                <router-link class="nav-item" to="/">Home</router-link>      
                <router-link class="nav-item" to="/channels">Channels</router-link>        
            </div>
            <div class="infoDiv">
                <div class="text-block">
                <p>Username</p>    
                </div>
                <div class="text-block">
                <p>ChannelName</p>    
                </div>                
                <div class="nav-item" @click="logout">Logout</div>
            </div>
        </nav> 
    `,
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