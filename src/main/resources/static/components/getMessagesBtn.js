export default {
    template: `
        <button @click="fetchMessages">Get Messages</button>
    `,
    methods: {
        async fetchMessages() {
            let response = await fetch("/rest/messages");

            response = await response.json();

            this.$store.commit("setMessages", response)
        }
    }
}