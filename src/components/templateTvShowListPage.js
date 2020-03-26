import React, { useState } from "react";
import Header from "../components/headerTvShowList";
import TvShowsList from "../components/tvShowsList";
import FilterControls from "../components/filterControls";

const TvShowsListPageTemplate = ({ tvShows, title }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  console.log(tvShows)
  let displayedMovies = tvShows
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numTvShows={displayedMovies.length} />
      {/* <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/> */}
      <TvShowsList
        tvShows={displayedMovies}
      />
    </>
  );
};

export default TvShowsListPageTemplate ;