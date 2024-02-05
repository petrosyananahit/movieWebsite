
import React from "react";
import { useGlobalContext } from "./context";
import './App.css';
const MoviesComponent = () => {
  const {
    isLoading,
    isError,
    movie,
    genres,
    selectedGenres,
    setSelectedGenres,
  } = useGlobalContext();

  const handleGenreClick = (genreId) => {
    setSelectedGenres((prevSelectedGenres) => {
      if (!prevSelectedGenres.includes(genreId)) {
        return [...prevSelectedGenres, genreId];
      } else {
        return prevSelectedGenres.filter((id) => id !== genreId);
      }
    });
  };

  return (
    <div style={{maxWidth:"1200px"}}>
      <ul style={{ textAlign:"left", backgroundColor:"black", display:"flex"}}>
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={`genBtn lists ${selectedGenres.includes(genre.id) ? "seleGen" : ""}`}
            onClick={() => handleGenreClick(genre.id)}
           style={{display:"flex", flexDirection:"column", listStyle:"none", maxWidth: "1300px", margin:" 0 auto", color:"white",cursor:"pointer"}}>
            {genre.name}
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError.show ? (
        <p>Error: {isError.msg}</p>
      ) : (
        <div>
          {movie.map((movie) => (
            <div key={movie.id}>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesComponent;
