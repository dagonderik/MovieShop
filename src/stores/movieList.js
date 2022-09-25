import { defineStore } from "pinia";
import axios from "axios";

/**
 * This store is used to load and store the list of movies using axios
 */
export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    /**
     * Array that holds the objects containing the movielist result of the search input
     */
    movies: [],
  }),
  getters: {
  },
  actions: {
    /**
     * Calls the API and receives a list of movies based on the search criteria
     * @param {string} input - Value used as search parameter to return a new list of movies
     */
    async fetchMovies(input) {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=4252d37721e58e270c56711191e69d38&language=pt-BR&query=${input}&page=1&include_adult=false`
        );
        this.movies = data.data;
        console.log(data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
