import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_TMDB_ACCESS_TOKEN
}`;
axios.defaults.headers.common["accept"] = "application/json";

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");

  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
    },
  });

  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};
