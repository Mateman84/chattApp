export default {
    template: `
        <button @click="fetchChannels">Get Channels</button>
    `,
    methods: {
        async fetchChannels() {
            let response = await fetch("/rest/channels");

            response = await response.json();

            this.$store.commit("setChannels", response)
        }
    }
}