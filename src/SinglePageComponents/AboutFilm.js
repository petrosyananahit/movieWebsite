import React from 'react'
import { useEffect, useState } from "react"
import '../App.css';


function AboutFilm({id}) {
    const[prod, setProd] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9b702a6b89b0278738dab62417267c49`)                     
        .then((res)=>res.json())
        .then(data=>setProd([data]))
    },[])
    const simage = "https://image.tmdb.org/t/p/w500"
    const backGroundImage = "https://image.tmdb.org/t/p/original/"
    return (
        <div className='root1'> 
            {prod.map(function(e) {
                return <div key={e.id} id='movieMain' >
                <div className='backDiv' style={{backgroundImage:`url(${backGroundImage+e.backdrop_path})`}}></div>
                <div className='chosenMovieImg'>
                <img src={backGroundImage + e.backdrop_path}/>
                </div>
                <div className='aboutChosenMovie'>
                <h1 > {e.original_title}</h1>
                <div className='overviewDiv'>
                <h3 className='overviewh3'>Overwiew</h3>
                <p className='movieOverview'>{e.overview}</p>
                </div>
                </div>
                </div>})}
  </div>
  )
}

export default AboutFilm

