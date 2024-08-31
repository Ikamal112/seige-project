// MovieDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <a href="https://www.netflix.com/"><button >Watch</button></a>
      <a href="https://www.netflix.com/"><button>Download</button></a>
    </div>
   
    
  );
};

export default MovieDetail;
