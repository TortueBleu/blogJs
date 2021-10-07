<template>
  <div id="app3">
    <label>Entrer votre titre : &nbsp;</label>
    <input type="text" v-model="titre" />
    <br /><br />
    <label>Entrer votre nom : &nbsp;</label>
    <input type="text" v-model="nom" />
    <br /><br />
    <label>Entrer votre texte : &nbsp;</label>
    <textarea rows="8" cols="100" v-model="text"> </textarea>
    <br /><br />
    <button id="btnTache" @click="addTask()">add</button>
    <ol>
      <li v-for="(item, index) in contenu" :key="index">
        {{ item.titre }}
        {{ item.nom }}
        {{ item.text }}
        {{ item.date }}
        <button v-on:click="suppTask(index)">Supprimer</button>
        <button v-on:click="editTexte(index)">Editer</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contenu: [],
      titre: "",
      nom: "",
      text: "",
    };
  },
  methods: {
    addTask() {
      let DateNow = new Date();

      //   let test =

      this.contenu.push({
        titre: this.titre,
        nom: this.nom,
        text: this.text,
        date: DateNow.toLocaleDateString(),
        status: "To Do",
      });

      //   input.value = "";
      //   titre.value = "";
      //   nom.value = "";
      this.titre = "";
      this.nom = "";
      this.text = "";
    },
    suppTask(index) {
      this.contenu.splice(index, 1);
    },
    editTexte(index) {
      const content = this.contenu[index];
      this.titre = content.titre;
      this.nom = content.nom;
      this.text = content.text;
      this.contenu.splice(index, 1);
    },
  },
};
</script>

<style>
ol {
  list-style: none;
}
label {
  vertical-align: top;
}
</style>