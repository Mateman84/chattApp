import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import Vuex from 'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        messages: [],
        user: null,
        channels: [],
        currentChannel: null
    },

    //Typ setters. Setters för state.
    mutations: {
        setMessages(state, messages) {
            state.messages = messages
        },
        appendMsg(state, message) {
            state.messages.push(message)
        },
        appendChannel(state, channel) {
            state.channels.push(channel)
        },
        setUser(state, user) {
            state.user = user
        },
        setChannels(state, channels) {
            state.channels = channels
        },
        setCurrentChannel(state, currentChannel) {
            state.currentChannel = currentChannel
        }
    },
    getters: {
        getCurrentChannel() {
            return state.currentChannel
        }
    }
    //actions: {}
})