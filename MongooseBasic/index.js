const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

Movie.insertMany([
  {
    title: "Amelie",
    year: 2000,
    score: 8.2,
    rating: "R",
    name: { name: "fortune" },
  },
  { title: "Alien", year: 1990, score: 8.1, rating: "R" },
  { title: "the iron giant", year: 1996, score: 7.2, rating: "PG" },
  { title: "stand by me", year: 1984, score: 8.6, rating: "R" },
  { title: "moonrise kingdom", year: 1996, score: 7.2, rating: "PG-13" },
]).then((data) => {
  console.log("IT WORKED");
  console.log(data);
});
