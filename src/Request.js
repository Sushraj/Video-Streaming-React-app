const API_KEY = "e51e6d41614efe172e9628aed8884b9d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMoviews: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoviews: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoviews: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
