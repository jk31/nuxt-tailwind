<template>
  <div class="container">
    <h1>Functions</h1>
    <button @click="helloWorld" class="border-2 border-red-500">
      helloWorld
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    helloWorld() {
      console.log("helloWorld");
      this.$firebase.functions().httpsCallable("helloWorld");
    }
  }
};
</script>

<style></style>
