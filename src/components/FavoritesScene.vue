<template>
  <div class="favorites">
     <div v-if="favorites.length > 0" class="allFav">
      <Card @click="removeFav" v-for="(item, index) in favorites" :key="index" :search="item"/>
    </div>
    <div v-else>
      <p>Veuillez ajouter des musiques en favoris</p>
    </div>
  </div>
</template>


<script>
import Card from "@/components/Card";

export default {
  name: 'FavoritesScene',
  data() {
    return {
      favorites: [],
    }
  },
  props: {

  },
  components: {
    Card
  },
  created() {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
  },
  methods: {
    removeFav(){
            let favs = localStorage.getItem('favorites');
            if (favs !== null) {
                favs = JSON.parse(favs);
                let indexInFav = favs.findIndex(el => el.id === this.search.id);
                if (indexInFav !== -1){
                    favs.splice(indexInFav, 1)
                    localStorage.setItem('favorites', JSON.stringify(favs));
                }
            }
        },
  }
};
</script>

<style lang="scss" scoped>

.allFav{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

</style>
