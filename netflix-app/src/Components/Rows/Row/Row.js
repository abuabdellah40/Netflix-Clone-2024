import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

function Row({ title, fetchData, isLargeRow = false }) {
  const [items, setItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [opts, setOpts] = useState({
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  });

  const baseImageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch data for", title, error);
      }
    }
    fetchItems();
  }, [fetchData, title]);

  // Adjust trailer size dynamically
  useEffect(() => {
    function handleResize() {
      const width = Math.min(window.innerWidth * 0.8, 800); // 80% of screen width, max 800px
      const height = width * 0.5625; // Maintain 16:9 aspect ratio
      setOpts((prevOpts) => ({
        ...prevOpts,
        width: width.toString(),
        height: height.toString(),
      }));
    }
    handleResize(); // Call initially
    window.addEventListener("resize", handleResize); // Listen to screen resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const handleMovieClick = async (item) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close the trailer if already open
    } else {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const data = await response.json();
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(trailer.key); // Set the YouTube trailer key
        } else {
          alert("Trailer not available for this movie.");
        }
      } catch (error) {
        console.error("Failed to fetch trailer", error);
      }
    }
  };

  return (
    <div className="row">
      {/* Title */}
      <h2 className="row__title">{title}</h2>

      {/* Posters */}
      <div className="row__posters">
        {items.map((item) => (
          <img
            key={item.id}
            className={`row__poster ${isLargeRow && "row__poster--large"}`}
            src={`${baseImageUrl}${
              isLargeRow ? item.poster_path : item.backdrop_path
            }`}
            alt={item.name || item.title}
            onClick={() => handleMovieClick(item)}
          />
        ))}
      </div>

      {/* Trailer */}
      {trailerUrl && (
        <div className="row__trailer">
          <button onClick={() => setTrailerUrl("")}>Close Trailer</button>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;
