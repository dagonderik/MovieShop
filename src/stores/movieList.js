import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore('movies',  {
    state: () => ({
        movies: [],
    }),
    getters: {
      getMovies(state){
          return state.movies;
        }
    },
    actions: {
      async fetchMovies() {
        try {
          const data = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=4252d37721e58e270c56711191e69d38&language=pt-BR&query=Spider&page=1&include_adult=false')
            this.movies = data.data;
            console.log(data.data);
          }
          catch (error) {
            alert(error);
            console.log(error);
        }
      }
    },
})