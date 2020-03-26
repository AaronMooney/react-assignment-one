import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homepage";
import TvShowsHomePage from "./pages/tvShowHomepage"
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import MovieReviewPage from './pages/movieReviewPage';
import "./globals/fontawesome";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext"
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import { Tabs } from "@yazanaabed/react-tabs";


const tabStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader/>

      <div style={tabStyles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Movies">
    
      <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="TV Series">
        <div className="container-fluid">
        <div className="container-fluid">
          <TvShowsContextProvider>
          <GenresContextProvider>
              <Switch>
                {/* <Route exact path="/reviews/form" component={AddMovieReviewPage} /> */}
                {/* <Route path="/reviews/:id" component={MovieReviewPage} /> */}
                {/* <Route exact path="/movies/favorites" component={FavoriteMoviesPage} /> */}
                {/* <Route path="/movies/:id" component={MoviePage} /> */}
                <Route path="/" component={TvShowsHomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </TvShowsContextProvider>
        </div>
        </div>
      </Tabs.Tab>
        </Tabs>
  </div>
      </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));