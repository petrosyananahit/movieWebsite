import React from 'react'
import { useEffect, useState } from "react"
import '../App.css';

function Actors({id}) {
    const[prod, setProd] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=9b702a6b89b0278738dab62417267c49`)                     
        .then((res)=>res.json())
        .then(data=>setProd(data.cast))
    },[])
    const simage = "https://image.tmdb.org/t/p/w500"
    return (
        <div className='root2'> 
            {prod.map(function(e) {
                return <div key={e.id} className='div2cards'>
                <img src={simage + e.profile_path}/>
                <p> {e.name}</p>
                </div>})}
  </div>
  )
}

export default Actors
