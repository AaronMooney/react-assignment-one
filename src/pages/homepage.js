import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import MovieAddToFavoritesButton from "../components/buttons/movieAddToFavorites";
import { Tabs } from "@yazanaabed/react-tabs";

const tabStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  return (
    <div style={tabStyles}>
      <Tabs activeTab={{ id: "tab1" }}>
        <Tabs.Tab id="tab1" title="Movies">
          <PageTemplate
            title="All Movies"
            movies={context.movies}
            action={(movie) => <MovieAddToFavoritesButton movie={movie} type="movies" />}
          />
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Trending">
          <PageTemplate
            title="Trending This Week"
            movies={context.trending}
            action={(movie) => <MovieAddToFavoritesButton movie={movie} type="trending"/>}
          />
        </Tabs.Tab>
        <Tabs.Tab id="tab3" title="Upcoming">
          <PageTemplate
            title="Upcoming Movies"
            movies={context.upcoming}
            action={(movie) => console.log("")}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default MovieListPage;
