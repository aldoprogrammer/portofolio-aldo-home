import { IconButton } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Aldo L.S.</h2>
        <div className='prompt'>
          <p>I am a web programmer who likes to learning programming using Javascript. Sometimes I do making some videos on YouTube, which is about gaming chanell.</p>
          <IconButton href="https://www.linkedin.com/in/aldo-latasoba-841233172/" target="_blank">
          <LinkedIn />
          </IconButton>
          <IconButton href="mailto:aldobesma@gmail.com" target="_blank">
            <Email />
          </IconButton>
          <IconButton href="https://github.com/aldoprogrammer" target="_blank">
        <GitHub />
      </IconButton>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>HTML, CSS, React JS, Javascript, TailwindCSS, MaterialUI, Bootstrap</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>NodeJS, MySQL</span>
          </li>
          <li className='item'>
            <h2> Bahasa Pemrogramman</h2>
            <span>Javascript, PHP, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
