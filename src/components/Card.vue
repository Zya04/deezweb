<template>
    <div class="cardMusic">
        <img :src="`${search.album.cover}`"/>
        <h1 class="title"> {{search.title}} </h1>
        <h2 class="info">{{search.artist.name}}/{{search.album.title}}</h2>
        <audio :src="`${search.preview}`" controls >ecouter</audio>
        <button @click="addFav" v-if="isFav === false">ajouter a ma liste des favoris</button>
        <button @click="removeFav" v-if="isFav === true">Enlever de ma liste des favoris</button>
    </div>
</template>


<script>
export default {
    name: 'Card',
    data() {
        return {
            favsArray: "",
        }
    },
    props: {
        search: Object,        
    },
    methods: {
        addFav() {
            let favs = localStorage.getItem('favorites');
            if (favs === null) {
                favs = [];
                favs.push(this.search)
            } else {
                favs = JSON.parse(favs);
                favs.push(this.search);
            }
            localStorage.setItem('favorites', JSON.stringify(favs));
        },
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
    },
    computed: {
        isFav() {
            let favs = localStorage.getItem('favorites');
            if (favs === null) {
                return false;
            } else {
                favs = JSON.parse(favs);
                let isInFavs = favs.find(el => el.id === this.search.id);
                return isInFavs !== undefined;
            }
        }
    }
    
}
</script>

<style>
.cardMusic{
    padding: 2% 0%;
    margin: 2%;
}
.title{
    font-size: 2em;
    padding: 0% 3%;
}
</style>
