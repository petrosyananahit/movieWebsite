
import React, { useContext, useEffect, useState } from "react";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9b702a6b89b0278738dab62417267c49";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=9b702a6b89b0278738dab62417267c49&query=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ]);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length) {
        setIsLoading(false);
        setMovie(data.results);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query === "") {
      getMovies(API_URL);
    } else {
      getMovies(`${SEARCH_URL}${query}`);
    }
  }, [query]);



useEffect(() => {
    if (selectedGenres.length > 0) {
      const filteredMovies = movie.filter((movie) =>
        movie.genre_ids.some((genreId) => selectedGenres.includes(genreId))
      );
      setMovie(filteredMovies);
    } else {
      setMovie([]);
      getMovies(API_URL);
    }
  }, [selectedGenres]);
  

  

  const value = {
    isLoading,
    isError,
    movie,
    query,
    setQuery,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
