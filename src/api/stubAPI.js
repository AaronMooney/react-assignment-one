class StubAPI {
    constructor() {
        this.favoriteMovies = []
        this.favoriteTvShows = []
        this.movieReviews = []
        this.tvShowReviews = []
    }

    addMovieToFavorites(movie) {
        if (!this.favoriteMovies.filter(e => e.id === movie.id).length > 0){
            this.favoriteMovies.push(movie)
        }
    }

    addTvShowToFavorites(tvShow) {
        if (!this.favoriteTvShows.filter(e => e.id === tvShow.id).length > 0){
            this.favoriteTvShows.push(tvShow)
        }
    }

    getAllMovies() {
        return this.favoriteMovies
    }

    getAllTvShows(){
        return this.favoriteTvShows
    }

    addMovieReview(review) {
        this.movieReviews.push(review)
    }

    addTvShowReview(review){
        this.tvShowReviews.push(review)
    }
    
    getMovieReviews(movieId) {
        var customReviews = []
        this.movieReviews.forEach(function(entry) {
            if (entry.movieId === movieId){
                customReviews.push(entry)
            }
        });
        return customReviews
    }

    getTvShowReviews(tvShowId) {
        var customReviews = []
        this.tvShowReviews.forEach(function(entry) {
            if (entry.tvShowId === tvShowId){
                customReviews.push(entry)
            }
        });
        return customReviews
    }

    removeTvShowFromFavorites(tvShow){
        this.favoriteTvShows = this.favoriteTvShows.filter(e =>  e !== tvShow)
    }

    removeMovieFromFavorites(movie){
        this.favoriteMovies = this.favoriteMovies.filter(e =>  e !== movie)
    }

    tvShowExistsInFavorites(tvShow){
        if (!this.favoriteTvShows.filter(e => e.id === tvShow.id).length > 0){
            return true
        } else {
            return false
        }
    }

    movieExistsInFavorites(movie){
        if (!this.favoriteMovies.filter(e => e.id === movie.id).length > 0){
            return true
        } else {
            return false
        }
    }

}

export default new StubAPI();