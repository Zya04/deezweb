<template>
  <div class="Favorites">
    <FavoritesScene msg="test"/>
  </div>
</template>


<script>
// @ is an alias to /src
import FavoritesScene from '@/components/FavoritesScene.vue';

export default {
  name: 'favorites',
  components: {
    FavoritesScene,
  },
};
</script>