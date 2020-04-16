import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import MovieAddToFavoritesButton from "../components/buttons/movieAddToFavorites";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const tabStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color:"white"
};

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  return (
    <div style={tabStyles}>
      <Tabs>
        <TabList>
          <Tab>Movies</Tab>
          <Tab>Trending</Tab>
          <Tab>Upcoming</Tab>
        </TabList>
        <TabPanel>
        <PageTemplate
            title="All Movies"
            movies={context.movies}
            action={(movie) => <MovieAddToFavoritesButton movie={movie} type="movies" />}
          />
        </TabPanel>
        <TabPanel>
          <PageTemplate
            title="Trending This Week"
            movies={context.trending}
            action={(movie) => <MovieAddToFavoritesButton movie={movie} type="trending"/>}
          />
        </TabPanel>
        <TabPanel>
          <PageTemplate
            title="Upcoming Movies"
            movies={context.upcoming}
            action={(movie) => console.log("")}
          />
        </TabPanel>
      </Tabs>
      </div>
  );
};

export default MovieListPage;
