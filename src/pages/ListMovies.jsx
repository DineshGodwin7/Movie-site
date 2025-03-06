import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

// Static movie data
const movies = [
  {
    id: 1,
    title: "Avatar",
    year: 2009,
    genre: "Sci-Fi",
    rating: 7.8,
    poster: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
  },
  {
    id: 2,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 7.9,
    poster: "https://m.media-amazon.com/images/I/81FQGqOuB2L._AC_SY679_.jpg",
  },
  {
    id: 3,
    title: "The Matrix",
    year: 1999,
    genre: "Action",
    rating: 8.7,
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    id: 4,
    title: "Gladiator",
    year: 2000,
    genre: "Drama",
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/I/51rOnIjLqzL.jpg",
  },
];

function ListMovies() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Movie List
      </Typography>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListMovies;