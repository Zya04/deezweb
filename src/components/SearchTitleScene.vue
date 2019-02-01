<template>
    <div class="searchTitle">
        <form @submit="displaySongs">
            <input type="text" v-model="query"><br>
            <select id="filter" v-model="filter" @change="displaySongs">
                <option value="ALBUM_ASC">Album</option>
                <option value="ARTIST_ASC">Artiste</option>
                <option value="TRACK_ASC">Titre</option>
                <option value="RANKING">Popularité</option>
                <option value="RATING_ASC">Mieux notés</option>
            </select><br>
            <button >Chercher</button>
        </form><br>
        <div v-if="searchResults.length !== 0 " class="allCard" >
           <Card v-for="(item, index) in searchResults" :key="index" :search="item"/>
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
            query: "",
            searchResults: [],
            filter: "TRACK_ASC",
        }
    },
    components: {
        Card
    },
    props: {
    },
    methods: {
        displaySongs(query, filter){
            this.searchResults = [];
            query = this.query
            filter = this.filter
            MusicService.search(query, filter).then((res) => {
                res.data.map(music => {
                    this.searchResults.push(music)
                })
            })
        }
    }
}
</script>

<style <style lang="scss" scoped>

.allCard{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

</style>

