<template>
  <div class="container">
    <h1>Logout</h1>
    <button @click="logout" class="border-2 border-red-500">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Logout");
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Logout successfull.");
          // Sign-out successful.
        })
        .catch(error => {
          console.log(error);
          // An error happened.
        });
    }
  }
};
</script>
