<template>
   <div>
      <h1>Pokemon List</h1>
      <b-card-group deck>
         <Card v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" />
      </b-card-group>
   </div>
</template>

<script>
import Card from "@/components/Card.vue"
import PokemonServices from '@/services/PokemonServices.js'

export default {
   name: 'List',
   components: {
      Card
   },
   data(){
      return{
         pokemons: [],
         limit: 36, //de 12 em 12
         offset: 0,
         count: 0,
         gifs: []
      }
   },
   created(){
      PokemonServices.getPokemons(this.limit, this.offset)
         .then(response => {
            this.pokemons = response.data.results
         })
         .catch(error => {
            console.log(error)
         }),
      PokemonServices.getPokemonGif()
         .then(response => {
            this.gifs = response.data
            console.log(this.gifs[0].gif)
         })
         .catch(error => {
            console.log(error)
         })
   },
   computed: {
      //Retorna a quantidade de cards que queremos por linha
      per_row(){
         return this.limit / 2
      }
   }
}
</script>