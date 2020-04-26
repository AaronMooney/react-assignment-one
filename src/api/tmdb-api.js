export const getMovies = () => {
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
    `/api/person/popular`
  )
    .then(res => res.json())
    .then(json => json.results);
}

export const getPerson = id => {
  return fetch(
    `/api/person/${id}`
  ).then(res => res.json());
};

export const getCredits = id => {
  return fetch(
    `/api/person/credits/${id}`
  ).then(res => res.json());
};

export const getTrendingMovies = () => {
  return fetch(
    `/api/movies/trending`,{headers: {
      'Authorization': window.localStorage.getItem('token')
    }}
  )
    .then(res => res.json())
    .then(json => json.results)
}

export const getUpcomingMovies = () => {
  return fetch(
    `/api/movies/upcoming`,{headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(json => json.results)
}

export const getTrendingTvShows = () => {
  return fetch(
    `/api/tvShows/trending`,{headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(json => json.results);
};

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