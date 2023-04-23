import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'c2c6a59d2a0cac62c086d6c57a51108a';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getOneMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data.results;
};

export const getMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};
