<template>
  <div id="app3">
    <label>Entrer votre texte : </label>

    <input type="text" id="input" />
    <button id="btnTache" @click="addTask()">add</button>
    <ol>
      <li v-for="(item, index) in taches" :key="index">
        {{ item.content }}
        <button v-on:click="DoneTask()">Fini</button>
        <button v-on:click="suppTask(index)">Supprimer</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taches: [],
    };
  },
  methods: {
    addTask() {
      let input = document.getElementById("input");
      let text = input.value;
      this.taches.push({ content: text, status: "To Do" });
      input.value = "";
    },
    suppTask(index) {
      this.taches.splice(index, 1);
    },
    DoneTask() {},
  },
};
</script>

<style>
ol {
  list-style: none;
}
</style>