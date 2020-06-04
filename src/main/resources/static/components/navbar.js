export default {
    template: `
        <nav>
            <div class="navbarContainer">
                <router-link class="nav-item" to="/">Home</router-link>      
                <router-link class="nav-item" to="/channels">Channels</router-link>    
                <span class="nav-item" @click="logout">Logout</span>
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