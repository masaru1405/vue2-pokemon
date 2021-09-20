import axios from 'axios'

const apiClient = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/',
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})

const apiClient2 = axios.create({
   baseURL: 'https://my-json-server.typicode.com/masaru1405/pokeinfo_db/pokemons',
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})

export default{
   getPokemons(limit, offset){
      return apiClient.get('/pokemon?limit=' + limit + '&offset=' + offset)
   },
   getPokemonByID(id){
      return apiClient.get('/pokemon/' + id)
   },

   //Retorna o gif de um pokemon 
   getPokemonGif(){
      return apiClient2.get()
   }
}