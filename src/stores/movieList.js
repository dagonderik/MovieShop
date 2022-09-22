import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore('movies',  {
    state: () => ({
        movies: [],
    }),
    getters: {
      getMovies(state){
          return state.users;
        }
    },
    actions: {
      async fetchMovies() {
        try {
          const data = await axios.get('https://jsonplaceholder.typicode.com/users')
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