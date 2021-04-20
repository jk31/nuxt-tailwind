<template>
  <div class="container">
    <h1>Firestore</h1>
    <form>
      <input v-model="title" class="border-2 border-red-500" type="text" />
      <input
        v-model="description"
        class="border-2 border-red-500"
        type="text"
      />
      <button @click.prevent="createTask" class="border-2 border-red-500">
        Create Task
      </button>
    </form>
    <button @click="readTasks" class="border-2 border-red-500">
      Read Tasks
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    createTask() {
      console.log("Create Task.");
      this.$db
        .collection("tasks")
        .add({
          title: this.title,
          description: this.description,
          user_uid: this.$firebase.auth().currentUser.uid
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.log("dadsd");
          console.error("Error adding document: ", error);
        });
    },
    readTasks() {
      console.log("Read tasks");
      this.$db
        .collection("tasks")
        .where("user_uid", "==", this.$firebase.auth().currentUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id);
            console.log(doc.data());
          });
        });
    }
  }
};
</script>

<style></style>
