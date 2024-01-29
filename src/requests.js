const API_KEY = '2d2ebfe5b74a7b004bb813d979bbe72f';

  const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchSciFi: `/discosver/movie?api_key=${API_KEY}&language=en-US`,
}

export default requests;