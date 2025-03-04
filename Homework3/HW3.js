/* 
Idress Baguaei
Homework 3 – Objects and Exception Handling in JS 
*/

// Movie class to store movie details
class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    // Returns movie info as a string
    getDetails() {
        return `${this.title} - Directed by ${this.director}, Released in ${this.year}`;
    }
}

// MovieCollection class to manage a list of movies
class MovieCollection {
    constructor() {
        this.movies = []; // Array to hold movie objects
    }

    // Add a movie to the collection
    addMovie(movie) {
        this.movies.push(movie);
        console.log(`Added: "${movie.title}"`);
    }

    // Remove a movie by title
    removeMovie(title) {
        try {
            const index = this.movies.findIndex(movie => movie.title === title);
            if (index === -1) {
                throw new Error(`"${title}" not found in the collection.`);
            }
            this.movies.splice(index, 1);
            console.log(`Removed: "${title}"`);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Display all movies in the collection
    showMovies() {
        try {
            if (this.movies.length === 0) {
                throw new Error("No movies in the collection.");
            }
            console.log("\nMovie Collection:");
            this.movies.forEach(movie => console.log(movie.getDetails()));
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Testing the movie collection
const collection = new MovieCollection();

// Adding the requested movies
const movie1 = new Movie("The Batman", "Matt Reeves", 2022);
const movie2 = new Movie("Avengers: Infinity War", "Anthony and Joe Russo", 2018);
const movie3 = new Movie("Goodfellas", "Martin Scorsese", 1990);

collection.addMovie(movie1);
collection.addMovie(movie2);
collection.addMovie(movie3);

collection.showMovies(); // Display all movies

collection.removeMovie("The Batman"); // Remove "The Batman"
collection.showMovies(); // Display remaining movies

collection.removeMovie("Titanic"); // Attempt to remove a non-existent movie

collection.removeMovie("Goodfellas"); // Remove "Goodfellas"
collection.removeMovie("Avengers: Infinity War"); // Remove "Avengers: Infinity War"

collection.showMovies(); // Attempt to display movies when empty
