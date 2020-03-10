class StubAPI {
    constructor() {
        this.favoriteMovies = []
        this.reviews = []
    }

    add(movie) {
        this.favoriteMovies.push(movie)
        console.log(this.favoriteMovies)
    }

    getAll() {
        return this.favoriteMovies;
    }

    addReview(review) {
        this.reviews.push(review)
    }
    
    getReviews(movieId) {
        var customReviews = []
        this.reviews.forEach(function(entry) {
            if (entry.movieId === movieId){
                customReviews.push(entry)
            }
        });
        return customReviews
    }

}

export default new StubAPI();