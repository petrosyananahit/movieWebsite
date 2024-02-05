import React from 'react'
import { useGlobalContext } from './context'
import './App.css';

function Searchbar() {
    const{query, setQuery} = useGlobalContext()
  return (
    <div>
        <section>
        <h3>Find movies TV shows and more</h3>
            <form action='#' onSubmit={(e)=>{
                e.preventDefault()
            }} className='searchform'>
            <div className='searchInp__container'>
            <input type='text' placeholder='Search here' className='search' value={query} onChange={(e)=>{
                setQuery(e.target.value)
            }}/>
            </div>
            </form>
        </section>
    </div>
  )
}

export default Searchbar