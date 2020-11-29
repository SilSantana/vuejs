<template>
    <div class="movies">
      <h2>Dunkirk</h2>
      <h3 v-if="category">Category: {{category}} </h3>
      <h3 v-if="category">Category: {{$route.params.category}} </h3>
      <p class="movies__deion">Miraculous evacuation of Allied soldiers from
        Belgium, Britain, Canada, and France, who were cut off and surrounded by
        the German army from the beaches and harbor of Dunkirk, France, during the
        Battle of France in World War II.</p>
    </div>
</template>

<script>
export default {
  name: 'Dunkirk',
  props: ['category']
}
</script>

<style lang="css">

</style>