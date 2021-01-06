const API_KEY = "7d152c751f1e71448a696cea6f6f3d9f" ;

const requests =  {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetcActionMovies: `discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies : `discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies : `discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&width_genres=99`,

}

export default requests;

