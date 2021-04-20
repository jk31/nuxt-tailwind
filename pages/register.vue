<template>
  <div class="container">
    <h1>Register</h1>
    <form>
      <input v-model="email" class="border-2 border-red-500" type="text" />
      <input
        v-model="password"
        class="border-2 border-red-500"
        type="password"
      />
      <button @click.prevent="createUser" class="border-2 border-red-500">
        Create User
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
    createUser() {
      console.log("Create User Start");
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // Signed in
          let user = userCredential;
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
