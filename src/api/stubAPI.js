class StubAPI {
    constructor() {
        this.favoriteMovies = []
        this.favoriteTvShows = []
        this.movieReviews = []
        this.tvShowReviews = []
    }

    addMovieToFavorites(movie) {
        var existing = this.favoriteMovies.filter(movieId => movieId = movie.id)
        if (!existing.length > 0){
            this.favoriteMovies.push(movie)
        }
    }

    addTvShowToFavorites(tvShow) {
        this.favoriteTvShows.push(tvShow)
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

}

export default new StubAPI();