import React from 'react'
import { useParams } from 'react-router-dom'
import AboutFilm from './SinglePageComponents/AboutFilm'
import Actors from './SinglePageComponents/Actors'
import Videos from './SinglePageComponents/Videos'

function Singlepage() {
    const {id} = useParams()
  return (
    <div style={{ display:"flex", flexDirection:"column", maxWidth: "1300px", margin:" 0 auto"}}>
        <a href='/' style={{color:"white", margin:"20px"}}>Homepage</a>       
        <AboutFilm id= {id}/>
        <Actors id ={id}/>
        <Videos id = {id}/>
    </div>

  )
}

export default Singlepage