// tmdbRequests.js
import axios from "axios";

// Base URL for TMDB API
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your actual TMDB API key

// Axios instance with base configuration
const tmdbInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch Trending Movies or TV Shows
export const fetchTrending = async (
  mediaType = "movie",
  timeWindow = "day"
) => {
  const response = await tmdbInstance.get(
    `/trending/${mediaType}/${timeWindow}`
  );
  return response.data.results || [];
};

// Fetch Netflix Originals
export const fetchNetflixOriginals = async () => {
  const response = await tmdbInstance.get("/discover/tv", {
    params: { with_networks: 213 }, // Netflix's network ID
  });
  return response.data.results || [];
};

// Fetch Top-Rated Movies
export const fetchTopRated = async () => {
  const response = await tmdbInstance.get("/movie/top_rated");
  return response.data.results || [];
};

// Fetch Movies by Genre
export const fetchMoviesByGenre = async (genreId) => {
  const response = await tmdbInstance.get("/discover/movie", {
    params: { with_genres: genreId },
  });
  return response.data.results || [];
};

// Fetch Popular TV Shows
export const fetchPopularTVShows = async () => {
  const response = await tmdbInstance.get("/tv/popular");
  return response.data.results || [];
};
