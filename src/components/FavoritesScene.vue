<template>
  <div class="favorites">
    {{msg}}
  </div>
</template>


<script>
export default {
  name: 'FavoritesScene',
  props: {
    msg: String,
  },
};
</script>