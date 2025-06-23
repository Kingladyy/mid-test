import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewRelease from './components/NewRelease'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='navbar'>
        <h1 className='navbar-title'>Anonime</h1>
        <div className='navbar-links'>
          <a href='#' className='navbar-link'>Home</a>
          <a href='#' className='navbar-link'>List anime</a>
        </div>
        <input type="search" placeholder="Search anime or movie" className='navbar-search' />
      </nav>
      <div className='explore'>
        <h2>Explore</h2>
        <p>What are you gonna watch today ?</p>
        <img src="./img/carousel.png" alt="Weather With You" />
      </div>
      <div className="release">
        <NewRelease />
      </div>
    </>
  )
}

export default App