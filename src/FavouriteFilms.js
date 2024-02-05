import React, { useEffect, useState } from 'react'
import './App.css';
function FavouriteFilms() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('films')));

useEffect(() => {
   setItems(items);
}, []);

if (items.length === 0) {
    return (<div>
        <a href='/' style={{color:"white"}}>Homepage</a>  
       <p style={{fontSize:"30px", color:"white", margin:"30px" }}>You have not selected any movies</p>;
    </div>)
  }

const simage = "https://image.tmdb.org/t/p/original/"
  return (
    <div style={{margin:"30px"}}>
    <a href='/' style={{color:"white"}}>Homepage</a>  
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", maxWidth:"1300px", gap:"20px", marginTop:"10px", margin:"0 auto"}}>
    {items.map((e)=>{
        return (<div className='container1' key={e.id}>
           <div className='movieDiv'>
        <div className='ratingDiv'>{e.vote_average}</div>
        <img src={simage+e.backdrop_path} className='movieImg'/>
        <div className='nameDiv'>
        <h2>{e.title}</h2>
        </div>
        </div>
        </div>)})}
        </div>
        </div>)}

export default FavouriteFilms