import React, { useState, useEffect } from 'react';

const MovieSearchComponent = () => {
  const api_key = "9b702a6b89b0278738dab62417267c49";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=,`;

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    // Fetch genres on component mount
    fetchGenres();
  }, []);

  const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => console.error('Error fetching genres:', error));
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenres((prevSelectedGenres) => {
      if (!prevSelectedGenres.includes(genreId)) {
        return [...prevSelectedGenres, genreId];
      } else {
        return prevSelectedGenres.filter((id) => id !== genreId);
      }
    });
  };

  const searchMovies = () => {
    // Perform movie search based on selected genres
    // You can customize this logic
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&page=1&with_genres=${selectedGenres.join(',')}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Render movies or update state as needed
      })
      .catch((error) => console.error('Error searching movies:', error));
  };

  return (
    <div>
      <div>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genBtn lists ${selectedGenres.includes(genre.id) ? 'seleGen' : ''}`}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div>
        <button onClick={searchMovies}>Search Movies</button>
      </div>
    </div>
  );
};

export default MovieSearchComponent;
