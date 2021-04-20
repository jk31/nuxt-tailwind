<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <input v-model="email" class="border-2 border-red-500" type="text" />
      <input
        v-model="password"
        class="border-2 border-red-500"
        type="password"
      />
      <button @click.prevent="login" class="border-2 border-red-500">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("Login");
      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // Signed in
          let user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
