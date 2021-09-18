import axios from 'axios'

const apiClient = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/',
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
  
}