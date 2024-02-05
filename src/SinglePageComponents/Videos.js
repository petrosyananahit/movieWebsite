import React from 'react'
import { useEffect, useState } from "react"
import '../App.css';

function Videos({id}) {
    const[prod, setProd] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9b702a6b89b0278738dab62417267c49`)                     
        .then((res)=>res.json())
        .then(data=>setProd(data.results))
    },[])
    const svideo = "https://www.youtube.com/embed/"
    return (
        <div className='root3'> 
            {prod.map(function(e) {
                return <div key={e.id} className='video'>
                <iframe
                title="YouTube video player"
                src={svideo+e.key}
                width="430"
                 height="315"
                 allowFullScreen="allowfullscreen"
                ></iframe>
                </div>})}
  </div>
  )
}

export default Videos