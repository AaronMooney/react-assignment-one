import { useEffect, useState } from "react";
import {getTvShow} from '../api/tmdb-api'

const useTvShow = id => {
  console.log(id)
  const [tvShow, setTvShow] = useState(null);
  useEffect(() => {
    console.log(id)
    getTvShow(id).then(tvShow => {
      setTvShow(tvShow);
    });
  }, [id]);
  return [tvShow, setTvShow];
};

export default useTvShow