<template>
  <div id="app3">
    <label>Entrer votre titre : &nbsp;</label>
    <input type="text" v-model="titre" />
    <br /><br />
    <label>Entrer votre nom : &nbsp;</label>
    <input type="text" v-model="nom" />
    <br /><br />
    <label>Entrer votre intro: &nbsp;</label>
    <input type="text" v-model="intro" />
    <br /><br />
    <label>Entrer votre texte : &nbsp;</label>
    <textarea rows="8" cols="100" v-model="content"> </textarea>
    <br /><br />
    <button id="btnTache" @click="addTask()">add</button>
    <div class="d-flex justify-content-around">
      <table class="table">
        <thead>
          <tr>
            <td>Titre</td>
            <td>Nom</td>
            <td>Intro</td>
            <td>Contenu</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listArticles" :key="index">
            <td> {{item.titre}} </td>
            <td> {{item.nom}} </td>
            <td>{{item.intro}}</td>
            <td>{{item.content}}</td>
            <td>{{item.date}}</td>
            <button v-on:click="suppTask(index)">Supprimer</button>
            <button v-on:click="editTexte(index)">Editer</button>
          </tr>
        </tbody>
        
      </table>
    </div>    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      contenu: [],
      titre: "",
      nom: "",
      intro: "",
      text: "",
    };
  },
  computed: {
    listArticles() {
      return this.$store.state.articles;
    },
  },

  methods: {
    addTask() {
      let DateNow = new Date();

      //   let test =

      this.listArticles.push({
        titre: this.titre,
        intro: this.intro,
        content: this.content,
        date: DateNow.toLocaleDateString(),
        nom: this.nom,
      });

      //   input.value = "";
      //   titre.value = "";
      //   nom.value = "";
      this.titre = "";
      this.nom = "";
      this.intro = "";
      this.content = "";
    },
    suppTask(index) {
      this.listArticles.splice(index, 1);
    },
    editTexte(index) {
      const content = this.listArticles[index];
      this.titre = content.titre;
      this.nom = content.nom;
      this.intro = content.intro
      this.content = content.content;
      this.contenu.splice(index, 1);
      this.listArticles.splice(index, 1);
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