"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == "") {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        let lastFilm,
            scoreFilm;
    
        for (let i = 0; i < 2; i++) {
            do {
                lastFilm = prompt("Как называется последний просмотренный вами фильм?", "");
                scoreFilm = prompt("Какую оценку вы ему ставите?", "");
            }
            while (lastFilm == null || lastFilm.length > 50 || lastFilm == "" ||
                scoreFilm == null || scoreFilm == "");
    
            personalMovieDB.movies[lastFilm] = scoreFilm;
        }
    },
    detectPersonalLevel: function() {
        let messageForUser;
    
        (personalMovieDB.count < 10) ? messageForUser = "Просмотрено довольно мало фильмов." :
            (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? messageForUser = "Вы - классический зритель." :
            (personalMovieDB.count > 30) ? messageForUser = "Вы - киноман." :
            messageForUser = "Произошла ошибка";
    
        alert(messageForUser);
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisiableMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let favoriteGenre = prompt(`Какой ваш любимый жанр под номером ${i+1}?`, "");

            if (favoriteGenre == null || favoriteGenre == "") {
                console.log("Введены некорректные данные");
                i--;
            } else {
                personalMovieDB.genres[i] = favoriteGenre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i} - это ${item}`)
        });
    }
};