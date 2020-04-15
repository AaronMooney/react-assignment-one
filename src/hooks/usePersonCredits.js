import { useEffect, useState } from "react";
import {getCredits} from '../api/tmdb-api'

const usePersonCredits = id => {
  const [credits, setCredits] = useState(null);
  useEffect(() => {

    getCredits(id).then(credits => {
      setCredits(credits)
    });
  }, [id]);
  return [credits, setCredits];
};

export default usePersonCredits