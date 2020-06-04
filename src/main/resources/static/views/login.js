export default {
    template: `
    <form class="login-form" @submit.prevent = "springLogin">
        <h2>Login</h2>
            <div class="login-div">
                <label for="uname">Username</label>
                <input class="userNameInput" v-model="username" type="text" name="uname" required>
                <label for="pass">Password</label>
                <input class="userPasswordInput" v-model="password" type="password" name="pass" required>
        <div class="btnContainer">
            <button>Login</button>
            <button @click="registerUser">register</button>    
        </div>        
    </div>
    </form>
    
    `,
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async springLogin() {

            const credentials = 'username=' +
                encodeURIComponent(this.username) +
                '&password=' +
                encodeURIComponent(this.password)

            let response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: credentials
            });

            if (response.url.includes('error')) {
                console.log('Wrong username/password');
            } else {
                console.log("Login Success");
                this.$router.push("/")
                let user = await fetch("/rest/users/who-am-i")
                user = await user.json()
                this.$store.commit("setUser", user)
            }
        },
        async registerUser() {

            let credentials = {
                username: this.username,
                password: this.password
            }

            let response = await fetch("/rest/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });

            try {
                response = await response.json()
                this.springLogin()
            } catch (error) {
                console.log("Wrong name and/or password")
            }
        }
    },
}