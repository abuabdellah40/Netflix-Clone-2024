import React, { useEffect, useState } from "react";
import { fetchTrending } from "../../utils/tmdbRequests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getTrendingMovie = async () => {
      try {
        const trendingMovies = await fetchTrending(); // Fetch trending movies
        const randomMovie =
          trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
        setMovie(randomMovie); // Set a random trending movie
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    getTrendingMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
