<template>
  <p>{{pablo}}</p>
</template>

<script>
export default {
    computed: {
        pablo(){
      return this.$store.state.zoulete
    }
    }

}
</script>

<style>

</style>