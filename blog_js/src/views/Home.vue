<template>
  <div class="home container">
    <div
      v-for="(item, index) in listArticles"
      :key="index"
      :item="item"
      class="
        w-50
        p-3
        mx-auto
        mb-2
        border border-secondary
        rounded
        shadow
        p-3
        mb-5
        bg-white
        rounded
      "
    >
      <h1>{{ item.titre }}</h1>
      <h4>{{ item.intro }}</h4>
      <p>{{ item.nom }}</p>
      
      <button class="btn btn-primary mb-2">Lire +</button>
      <p>{{ item.date }}</p>
    </div>
    <p>{{ zoulette }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  computed: {
    listArticles() {
      return this.$store.state.articles;
    },
  },
  data() {
    return {};
  },
};
</script>
