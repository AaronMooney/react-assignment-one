import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import TvShowAddToFavoritesButton from "../components/buttons/tvShowAddToFavorites";
import { Tabs } from "@yazanaabed/react-tabs";

const tabStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);

  return (
    <div style={tabStyles}>
      <Tabs activeTab={{ id: "tab1" }}>
        <Tabs.Tab id="tab1" title="Tv Shows">
          <PageTemplate
            title="All Tv Shows"
            tvShows={context.tvShows}
            action={(tvShow) => (
              <TvShowAddToFavoritesButton tvShow={tvShow} type="tv" />
            )}
          />
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Trending">
          <PageTemplate
            title="Trending This Week"
            tvShows={context.trending}
            action={(tvShow) => (
              <TvShowAddToFavoritesButton tvShow={tvShow} type="trending" />
            )}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default TvShowListPage;
