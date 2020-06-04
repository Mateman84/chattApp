import navbar from "../components/navbar.js"

export default {
    template: `
    <div id="app">
    <navbar v-if="user"/>
      <main>
        <router-view />
      </main>
    </div>
  `,
    components: {
        navbar
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    async created() {
        this.fetchChannels()
        let user = await fetch("/rest/users/who-am-i")
        try {
            user = await user.json()
            this.$store.commit("setUser", user)
        } catch (error) {
            console.log("not logged in.")
        }
    },
    methods: {
        async fetchChannels() {
            let response = await fetch("/rest/channels");

            response = await response.json();

            this.$store.commit("setChannels", response)
        }
        /* async fetchMessages() {
            let response = await fetch("/rest/messages"); //En fetch utan ett objekt med enbart en sträng går ALLTID till en getmapping

            response = await response.json();

            this.$store.commit("setMessages", response)
        } */
    }
}