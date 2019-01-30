<template>
    <div class="cardMusic">
        <img :src="`${search.album.cover}`"/>
        <h1 class="title"> {{search.title}} </h1>
        <h2 class="info">{{search.artist.name}}/{{search.album.title}}</h2>
        <audio :src="`${search.preview}`" controls >ecouter</audio>
        <button>ajouter a ma liste des favoris</button>
    </div>
</template>


<script>
export default {
    name: 'Card',
    data() {
        return {
            card: "",
        }
    },
    props: {
        search: Object,        
    },
    
}
</script>

<style>
.cardMusic{
    padding: 2% 0%;
}
.title{
    font-size: 2em;
    padding: 0% 3%;
}
</style>
