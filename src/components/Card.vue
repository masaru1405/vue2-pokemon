<template>
   <b-col sm="3">
      <b-card id="card">
            <router-link :to="{name: 'Show', params: {id: getID()}}">
               <img class="card-imt-top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif">
               <b-card-title id="title">
                  {{capitalizeFirstLetter(pokemon.name)}}
               </b-card-title>
            </router-link>
         </b-card>
   </b-col>
         
    
</template>

<script>
export default {
   name: "Card",
   props: {
      pokemon: Object
   },
   methods: {
      getID(){
         const url = this.pokemon.url.split("https://").toString()
         const array = url.split("/")
         const id = array.length - 2

         /*DEBUG*/
         //console.log("url: " + url)
         //console.log("array: " + array)
         //console.log("array[0] = " + array[0] + " // array[ultimaPosicao] = " + array[array.length-1])
         //console.log("array.length - 2 = " + id + " // array.length: " + array.length)
         //console.log("Array[id]: " + array[id] + "\n*********************")
         return array[id]
      },
      capitalizeFirstLetter(string){
         return string[0].toUpperCase() + string.slice(1)
      }
   }
}
</script>

<style scoped>
.row{
   padding-bottom: 15px;
}

#title{
   font-size: 14px;
   padding-top: 0.75rem;
}
#card{
   margin-bottom: 1.5rem;
   text-align: center;
}
</style>