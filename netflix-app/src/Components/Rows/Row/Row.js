import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./Row.css";

function Row({ title, fetchData, isLargeRow = false }) {
  const [items, setItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchItems() {
      const data = await fetchData();
      setItems(data);
    }
    fetchItems();
  }, [fetchData]);

  const handleMovieClick = async (item) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close trailer if already open
    } else {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(trailer.key); // Set trailer ID
        }
      } catch (error) {
        console.error("Error fetching trailer", error);
      }
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {items.map((item) => (
          <div
            key={item.id}
            className={`row__poster-container ${
              isLargeRow && "row__poster-container--large"
            }`}
          >
            <img
              className={`row__poster ${isLargeRow && "row__poster--large"}`}
              src={`${baseImageUrl}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.name || item.title}
              onClick={() => handleMovieClick(item)}
            />
          </div>
        ))}
      </div>
      {trailerUrl && (
        <div className="row__trailer-container">
          <button
            className="row__close-button"
            onClick={() => setTrailerUrl("")}
          >
            ✖
          </button>
          <YouTube
            videoId={trailerUrl}
            opts={{
              width: "100%",
              height: "450",
              playerVars: { autoplay: 1 },
            }}
            className="row__trailer-video"
          />
        </div>
      )}
    </div>
  );
}

export default Row;
