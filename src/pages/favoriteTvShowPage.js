import React, { useContext } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateTvShowListPage";
import AddReviewButton from "../components/buttons/addTvShowReview";
import RemoveFromFavoritesButton from "../components/buttons/removeTvFromFavoritesButton";
import "./homepage.css";
import {TvShowsContext} from "../contexts/tvShowsContext"


const FavoriteTvShowsPage = (props) => {
  const context = useContext(TvShowsContext);
  return (
    <div className="page">
      <PageTemplate
        tvShows={context.favorites}
        title={"Favorite Tv Shows"}
        action={(tvShow) =>
          <>
          <AddReviewButton tvShow={tvShow} />
          <RemoveFromFavoritesButton tvShow={tvShow}/>
          </>
        }
      />
    </div>
  );
};

export default FavoriteTvShowsPage;
