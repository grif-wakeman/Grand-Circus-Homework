const movies = [
    {
        title: "Look Behind You",
        directed_by: {
            name: "Phil A. Buster"
        },
        year: 2004
    },
    {
        title: "Broken Promises",
        directed_by: {
            name: "Lars Cough"
        },
        year: 2015
    },
    {
        title: "Surf's Up",
        directed_by: {
            name: "Brian Wilson"
        },
        year: 1971
    },
    {
        title: "Tightrope Tuesday",
        directed_by: {
            name: "Lars Cough"
        },
        year: 1996
    },
]



const findMovieByTitle = (array, title) => array.find(movie => movie.title === title);

console.log("Find Movie by Title");

console.log(findMovieByTitle(movies, "Surf's Up"));



const findMovieByDirector = (array, director) => array.filter(movie => movie.directed_by.name === director);

console.log("Find Movie by Director");

console.log(findMovieByDirector(movies, "Lars Cough"));



const findMovieByYear = (array, year) => array.filter(movie => movie.year === year);

console.log("Find Movie by Year");

console.log(findMovieByYear(movies, 2004));



function addMovie(array, title, name, year) {
    let newMovie = {
        title,
        directed_by: {name},
        year
    }
    array.push(newMovie);
}

console.log("Add a Movie");

addMovie(movies, "Last Halloween", "Roger Skeleton", 2008);

console.log(movies);



function editMovie(array, index, title, name, year) {
    array[index].title = title;
    array[index].directed_by.name = name;
    array[index].year = year;
}

console.log("Edit a Movie");
editMovie(movies, 2, "Surf's Over", "Brain Wilson", 1972);

console.log(movies);



function deleteMoviesWithADirector(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].directed_by.name) {
            array.splice(i);
        }
        return array
    }
}

console.log("delete movies with a director");
console.log(deleteMoviesWithADirector(movies));
