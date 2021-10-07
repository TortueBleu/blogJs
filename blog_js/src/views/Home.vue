<template>
  <div class="home container">
    <div v-for="item in articles" :key="item" class="w-50 p-3 mx-auto mb-2 border border-secondary rounded shadow p-3 mb-5 bg-white rounded"> 
        <h1>{{item.titre}}</h1>
        <h4>{{item.intro}}</h4>
        <p>{{item.auteur}}</p>
        <button class="btn btn-primary mb-2">lire Plus</button>
        <p>{{item.date}}</p>
    </div>  
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    
  },
  data() {
      return{
        articles :   [
          {
            titre : "Article 1",
            intro : "test 1",
            date : "06/10/2021",
            auteur: "Tac"
          } ,
          {
            titre : "Article 2",
            intro : "test 2",
            date : "07/10/2021",
            auteur : "Tac2"
          } ,
        ] 
      }     
    },
};
</script>
