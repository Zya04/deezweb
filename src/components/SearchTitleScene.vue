<template>
    <div class="searchTitle">
        <form @submit="displayArtist">
            <input type="text" v-model="artist">
            <select id="filter" v-model="filter" @submit="displayArtist">
                <option value="ALBUM_ASC">Album</option>
                <option value="ARTIST_ASC">Artiste</option>
                <option value="TRACK_ASC">Titre</option>
                <option value="RANKING">Popularité</option>
                <option value="RATING_ASC">Mieux notés</option>
            </select>
            <button >Chercher</button>
        </form>
        <div v-if="search.length !== 0 " class="allCard" >
           <Card v-for="(music, index) in search" :key="index" :search="music"/>
        </div>
        <div v-else>
            Chercher toutes les musiques que vous voulez. 
        </div>
    </div>
</template>

<script>
import MusicService from '@/services/MusicService';
import Card from "@/components/Card";

export default {
    name: 'SearchTitleScene',
    data() {
        return {
            artist: "",
            search: [],
            filter: "TRACK_ASC",
        }
    },
    components: {
        Card
    },
    props: {
    },
    methods: {
        displayArtist(artist, filter){
            this.search = [];
            artist = this.artist
            filter = this.filter
            MusicService.search(artist, filter  ).then((res) => {
                res.data.map(music => {
                    this.search.push(music)                    
                    console.log(this.search)
                })
            })
        }
    }
}
</script>

<style>
.allCard{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>

