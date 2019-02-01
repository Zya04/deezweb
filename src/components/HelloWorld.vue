<template>
  <div class="home">
    <h1>Bienvuenue sur Deezweb</h1>
    <div v-if="randomMusic" class="random-favorit-container">
      <Card @click="removeFav" :search="randomMusic"/>
      <button class="random-btn" @click="changeMusic">
        <i class="fas fa-random"></i>
        Choisir une autre musique
      </button>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    Card,
  },
  data(){
    return {
      favorites: [],
      randomMusic: [],
    }
  },
  created(){
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    this.randomMusic = this.favorites[Math.floor(Math.random() * this.favorites.length)];
  },
  methods:{
     removeFav() {
      this.favorites = this.favorites.filter(music => music.id !== id);
      this.randomMusic = this.favorites[Math.floor(Math.random() * this.favorites.length)];
    },
    changeMusic() {
      this.randomMusic = this.favorites[Math.floor(Math.random() * this.favorites.length)];
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
