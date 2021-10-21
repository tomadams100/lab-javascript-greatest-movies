// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const newArr = movies.map(movie => movie.director)
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howManyBySteve = movies.filter(movie => movie.director=="Steven Spielberg")
  if (howManyBySteve.length === 0) return 0

  const bySteveAndDrama = movies.filter(movie => ((movie.director=="Steven Spielberg") && (movie.genre.includes("Drama"))))
  return bySteveAndDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0
  const moviesWithScores = movies.filter(movie => movie.score)
  const totalScore = moviesWithScores.reduce((total, movie) => total + movie.score,0)
  let averageScore = Number((totalScore / movies.length).toFixed(2))
  return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) return 0
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  if (dramaMovies.length === 0) return 0
  const totalScore = dramaMovies.reduce((total, movie) => total + movie.score,0)
  let averageScore = Number((totalScore / dramaMovies.length).toFixed(2))
  return averageScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function ascRealseYear(a, b) {
  if (a.year < b.year) return -1
  if (a.year > b.year) return 1
  if (a.year = b.year) {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
  }
}

function orderByYear(movies) {
  const sortedMovies = movies.sort(ascRealseYear)
  arrayOfMovies = []
  sortedMovies.forEach(movie => arrayOfMovies.push(movie))
  return arrayOfMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function ascAlphabetical(a, b) {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  if (a.title = b.title) return 0
}

function orderAlphabetically(movies) {
  const sortedMovies = movies.slice().sort(ascAlphabetical)
  const movieTitles = sortedMovies.map((movie) => movie.title)
  const firstTwenty = movieTitles.slice(0,20)
  return firstTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function hoursToMins(duration) {
  let hours = (Number(duration[0]))*60
  let minutes = 0
  if (duration.length > 2) {
    minutes = ((Number(duration[3]))*10)+((Number(duration[4])))
  } else {
    minutes = 0
  }
  return hours + minutes
}

function turnHoursToMinutes(movies) {
  let newArr = movies.map(movie => {
      let input = {
    year: movie.year,
    director: movie.director,
    duration: hoursToMins(movie.duration),
    genre: movie.genre,
    score: movie.score}
    return input
  })
  return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
 function bestYearAvg(movies) {
   /*
  let sortedMovies = movies.sort(ascRealseYear)
  let newArr = sortedMovies.map(movie => {
    if (!newArr.includes(movie.year)) {
      let input = {
        year: movie.year,
        score: movie.score}
        return input
    } else {
        return movie.year.score: movie.year.score += movie.score 
    }
  })
  return newArr
  */
} 



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
