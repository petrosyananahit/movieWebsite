import React from 'react';
import Movies from './Movies';
import  Searchbar  from "./Searchbar"
import './App.css';
import MoviesComponent from './Moviecomponent';
function Homepage() {

  return (
    <div style={{maxWidth:"1200px", margin:"0 auto"}}>
    <header>
    <div className="logo">
      <a href="/" className="logoText">
        <img src="./netflix-logo.png" alt="" />
      </a>
    </div>
    <div>
      <Searchbar/>
    </div>
  </header>
  <section className="home" style={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
  <div className="title-home">
    <h1>Movies</h1>
    <p>
    Movies - scary, funny, dramatic, romantic - make us experience a whole range of emotions. Many films - many impressions!
    </p>
  </div>

</section>
<MoviesComponent/>
<main id="main" style={{display:"flex"}}>
<Movies/>

</main>
<section className="info">
			<div className="infoText">
				<h1>There is so much more you can see.</h1>
				<p>
        Netflix offers a huge library of feature films, documentaries, TV series, anime, award-winning Netflix original content, and more. Watch as much as you want, whenever you want.
				</p>
				<button><a href='/favourites' style={{color:"rgb(155, 22, 22)", fontWeight:"bold",fontFamily: 'Arial, sans-serif', fontSize: '20px', }}>Click here to see the movies you like
<img src='./click.jpg'  style={{ width: "30px", margin:"0 auto" }} alt="click" /></a></button>
			</div>
		</section>
		<div className="main-loading">
			<div className="loader">
				<span></span>
				<span></span>
			</div>
		</div>
</div>
    // <div className='body-container' style={{ maxWidth: "1300px", margin:" 0 auto" }}>
    // <div>
    // <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '36px', fontWeight: 'bold', color: '#fff' }}>Welcome to my movie web-page</h1>
    // <Searchbar />
    // </div>
    // <div style={{display:"flex", marginTop:"20px",}}>    
    // <MoviesComponent/>
    // <Movies/>
    // <a href='/favourites' style={{color:"rgb(155, 22, 22)", fontWeight:"bold",fontFamily: 'Arial, sans-serif', fontSize: '26px', }}>Click here to see the movies you like
    // <img src='./click.jpg'  style={{ width: "40px", margin:"0 auto" }} alt="click" /></a>
    // </div>
    // </div>
  )
}

export default Homepage