<template>
  <div class="home container">
    <div class=" p-3 mx-auto mb-2 border border-secondary rounde shadow p-3 mb-5 bg-white rounded">
      <h3 class="blog">{{ listArticles[getId].titre }}</h3>
      <h4 class="blog">{{ listArticles[getId].intro }}</h4>
      <h5 class="blog">{{ listArticles[getId].content}}</h5>
      <p class="blog-end ">{{ listArticles[getId].nom }}, {{ listArticles[getId].date }}</p>
      


    </div>
  </div>  
</template>

<script>
export default {
    computed: {
      listArticles() {
        return this.$store.state.articles;
      },
      getId() {
        return this.$route.params.id;
      }
    }
}
</script>

<style>
  .blog{
    text-align: start;
  }
  .blog-end{
    text-align: end;
  }
</style>