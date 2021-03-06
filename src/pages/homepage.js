import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import MovieAddToFavoritesButton from "../components/buttons/movieAddToFavorites";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './homepage.css'
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const { authToken } = useAuth();

  return (
    <>{authToken?(
      <>
    <div className="page">
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
      </>
    ):(
        <Redirect to="/login"    /> )}</>
  );
};

export default MovieListPage;
