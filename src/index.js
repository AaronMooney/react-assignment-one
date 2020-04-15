import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homepage";
import TvShowsHomePage from "./pages/tvShowHomepage"
import MoviePage from './pages/movieDetailsPage';
import TvShowPage from './pages/tvShowDetailsPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import FavoriteTvShowPage from './pages/favoriteTvShowPage';
import MovieReviewPage from './pages/movieReviewPage';
import TvShowReviewPage from './pages/tvShowReviewPage';
import "./globals/fontawesome";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext"
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader/>
      <div className="container-fluid">
          <MoviesContextProvider>
          <TvShowsContextProvider>
          <GenresContextProvider>
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/movies/reviews/:id" component={MovieReviewPage} />
                <Route path="/tvShows/reviews/:id" component={TvShowReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/tvShows/favorites" component={FavoriteTvShowPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/tvShows/:id" component={TvShowPage} />
                <Route path="/tvShows" component={TvShowsHomePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
            </TvShowsContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));