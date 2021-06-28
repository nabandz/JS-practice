"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm,
    scoreFilm;

for (let i = 0; i < 2; i++) {
    do {
        lastFilm = prompt("Как называется последний просмотренный вами фильм?", "");
        scoreFilm = prompt("Какую оценку вы ему ставите?", "");
    }
    while (lastFilm == null || lastFilm == undefined || lastFilm.length > 50 || lastFilm == "" ||
        scoreFilm == null || scoreFilm == undefined || scoreFilm == "");

    personalMovieDB.movies[lastFilm] = scoreFilm;
}

let messageForUser;

(personalMovieDB.count < 10) ? messageForUser = "Просмотрено довольно мало фильмов." :
    (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? messageForUser = "Вы - классический зритель." :
    (personalMovieDB.count > 30) ? messageForUser = "Вы - киноман." :
    messageForUser = "Произошла ошибка";

alert(messageForUser);

console.log(personalMovieDB);