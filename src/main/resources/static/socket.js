import { store } from './store.js'

let ws;
let isConnected = false;
connect();

function connect() {
    // change PORT to your backends PORT
    ws = new WebSocket('ws://localhost:4000/my-secret-socket');
    ws.onmessage = (e) => {
        showSomething(e.data);

        let data;
        try {
            data = JSON.parse(e.data)
        } catch (error) {

        }

        if (data && data.text) {
            store.commit("appendMsg", data);
        }
    }
    ws.onopen = (e) => {
        sendSomething();
        isConnected = true;
    };

    ws.onclose = (e) => {
        console.log("Closing websocket...");
    };

    console.log("Connecting...");
}

function disconnect() {
    if (ws != null) {
        ws.close();
    }
    isConnected = false;
    console.log("Disconnected");
}

function sendSomething() {
    let socketExample = {
        message: "Testing Sockets",
        timestamp: Date.now()
    }

    ws.send(JSON.stringify(socketExample));
}

function showSomething(message) {
    console.log(message);
}