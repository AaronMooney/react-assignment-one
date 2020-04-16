import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import TvShowAddToFavoritesButton from "../components/buttons/tvShowAddToFavorites";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './homepage.css'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);

  return (
    <div className="page">
      <Tabs>
        <TabList>
          <Tab>Tv Shows</Tab>
          <Tab>Trending</Tab>
        </TabList>
        <TabPanel>
        <PageTemplate
            title="All Tv Shows"
            tvShows={context.tvShows}
            action={(tvShow) => (
              <TvShowAddToFavoritesButton tvShow={tvShow} type="tv" />
            )}
          />
        </TabPanel>
        <TabPanel>
        <PageTemplate
            title="Trending This Week"
            tvShows={context.trending}
            action={(tvShow) => (
              <TvShowAddToFavoritesButton tvShow={tvShow} type="trending" />
            )}
          />
        </TabPanel>
      </Tabs>
      </div>
  );
};

export default TvShowListPage;
