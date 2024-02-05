import React, { useEffect, useState } from 'react'
import './App.css';
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

function Movies() {
    const {movie} = useGlobalContext()
    const[films, setFilms] = useState([])
    const [buttonColors, setButtonColors] = useState({})
    const simage = "https://image.tmdb.org/t/p/original/"


    useEffect(() => {
      const storedFilms = JSON.parse(localStorage.getItem('films')) || [];
      setFilms(storedFilms);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("films", JSON.stringify(films));
    }, [films]);
  
    const handleLikeButtonClick = (e) => {
      const isAlreadyLiked = films.some((film) => film.id === e.id);
      if (isAlreadyLiked) {
        const updatedFilms = films.filter((film) => film.id !== e.id);
        setFilms(updatedFilms);
        setButtonColors((prevColors) => ({
          ...prevColors,
          [e.id]: "white",
        }));
      } else {
        const newColor = "#ee3836";
        setFilms([...films, e]);
        setButtonColors((prevColors) => ({
          ...prevColors,
          [e.id]: newColor,
        }));
      }
    };
  
  return (
    <div className='containerformovies'>
        {movie.map((e)=>{
        return (
          <div>
        <NavLink to={`movie/${e.id}`}>
        <div className='movieDiv'>
        <div className='ratingDiv'>{e.vote_average}</div>
        <img src={simage+e.backdrop_path} className='movieImg'/>
        <div className='nameDiv'>
        <h2>{e.title}</h2>
        </div>
        </div>
        </NavLink>
        <div>
        <button className="likebutton"
        style={{ backgroundColor: buttonColors[e.id] || "white", display:"flex"}}
        onClick={() => handleLikeButtonClick(e)}
        ><img src='./like1.webp' style={{width:"30px", objectFit:"contain"}}/>Like
        </button>
        </div>
        </div>
        )})}
        
        </div>
  )
}

export default Movies