<template>
   <div>
      <h1>{{capitalizeFirstLetter(pokemon.name)}}</h1>
      <div>
         <img :src="image" :alt="pokemon.name">
      </div>
      <ul v-for="(info, index) in pokemon.types" :key="index">
         <li >
            SLOT: {{info.slot}} | TYPE: {{info.type.name}} 
         </li>
      </ul>
   </div>
</template>

<script>
import PokemonServices from "@/services/PokemonServices.js"

export default {
   name: "Show",
   props: ["id"],
   data(){
      return{
         pokemon: Object,
      }
   },
   computed: {
      image(){
         let id_image = ''

         //As imagens menores que 100, possuem um '0' antes, ex: 021, 001 e etc
         //this.id é uma string (vem via URL)
         if(this.id < 10){
            id_image = "00" + this.id
         }else if(this.id >= 10 && this.id < 100){
            id_image = "0" + this.id
         }else{
            id_image = this.id
         }
         return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+id_image+".png" 
      }
   },
   created(){
      PokemonServices.getPokemonByID(this.id)
         .then(response => {
            this.pokemon = response.data
            //this.image += this.id 
            //console.log(response.data.types)
         })
         .catch(error => {
            console.log("There was an error: " + error.response)
         })
   },
   methods: {
      capitalizeFirstLetter(string){
         return string[0].toUpperCase() + string.slice(1)
      }
   }
}
</script>