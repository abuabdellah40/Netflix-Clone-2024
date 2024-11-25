import React from "react";
import "./RowList.css";
import Row from "../Row/Row";
import {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchMoviesByGenre,
  fetchPopularTVShows,
} from "../../../utils/tmdbRequests";

function RowList() {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchData={fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchData={() => fetchTrending("all", "week")}
        isLargeRow
      />
      <Row title="Top Rated" fetchData={fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchData={() => fetchMoviesByGenre(28)}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchData={() => fetchMoviesByGenre(35)}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchData={() => fetchMoviesByGenre(27)}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchData={() => fetchMoviesByGenre(10749)}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchData={() => fetchMoviesByGenre(99)}
        isLargeRow
      />
      <Row
        title="Popular TV Shows"
        fetchData={fetchPopularTVShows}
        isLargeRow
      />
    </>
  );
}

export default RowList;
