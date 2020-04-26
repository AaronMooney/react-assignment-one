export const getMovies = () => {
  console.log("getting")
  console.log(window.localStorage.getItem('token'))
  return fetch(
    '/api/movies/',{headers: {
    'Authorization': window.localStorage.getItem('token')
    }
  })
    .then(res => res.json())
    .then(json => {return json.results;})
    .catch(err => console.log(err));
};

export const getTvShows = () => {
  return fetch(
    `/api/tvShows/`,{headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(json => json.results);
};

export const getMovie = id => {
  return fetch(
    `/api/movies/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  }
  ).then(res => res.json());
};

export const getTvShow = id => {
  return fetch(
    `/api/tvShows/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    `/api/genres`,{headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
)
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieReviews = id => {
  return fetch(
    `/api/movies/${id}/reviews`,
    {headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
)
    .then(res => res.json())
    .then(json => json.results);
};

export const getTvShowReviews = id => {
  return fetch(
    `/api/tvShows/${id}/reviews`,
    {headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
)
    .then(res => res.json())
    .then(json => json.results);
};

export const getPopularPeople = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
}

export const getPerson = id => {
  console.log("getting person")
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results)
}

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results)
}

export const getTrendingTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results)
}

export const login = (username, password) => {
  return fetch('/api/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: 'post',
      body:  JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
  };

export const signup = (username, password) => {
  return fetch('/api/users?action=register',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({username: username, password: password })
    }).then(res => res.json())
  };

export const addMovieReview = (data) => {
  const {movieId, author, content} = data
  return fetch(
    `/api/movies/${movieId}/reviews`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({author, content})
    }
  ).then(res => res.json())
}

export const addTvShowReview = (data) => {
  const {tvShowId, author, content} = data
  return fetch(
    `/api/tvShows/${tvShowId}/reviews`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({author, content})
    }
  ).then(res => res.json())
}