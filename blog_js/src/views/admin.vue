<template>
  <div id="app3">
    <label>Entrer votre titre : </label>
    <input type="text" id="titre" />
    <br/><br/>
    <label>Entrer votre nom : </label>
    <input type="text" id="nom" />
    <br/><br/>
    <label>Entrer votre texte : </label>
    <input type="text" id="input" />
    <br/><br/>
    <button id="btnTache" @click="addTask()">add</button>
    <ol>
      <li v-for="(item, index) in contenu" :key="index">
        {{ item.content }}
        <button v-on:click="suppTask(index)">Supprimer</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contenu: [],
    };
  },
  methods: {
    addTask() {
      let titre = document.getElementById("titre");
      let titleText = titre.value;

      let nom = document.getElementById("nom");
      let nameText = nom.value;

      let input = document.getElementById("input");
      let text = input.value;

      let test = titleText + "\n" + nameText + "\n" + text;

      this.contenu.push({ content: test, status: "To Do" });

      input.value = "";
      titre.value = "";
      nom.value = "";
    },
    suppTask(index) {
      this.contenu.splice(index, 1);
    },
  },
};
</script>

<style>
ol {
  list-style: none;
}
</style>