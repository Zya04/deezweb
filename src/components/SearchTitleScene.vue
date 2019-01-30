<template>
    <div class="searchTitle">
        <form>
            <input type="text" v-model="artist">
            <button @click="displayArtist">Chercher</button>
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
        }
    },
    components: {
        Card
    },
    props: {
        msg: String,
    },
    methods: {
        displayArtist(artist){
            this.search = [];
            artist = this.artist
            MusicService.search(artist).then((res) => {
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

