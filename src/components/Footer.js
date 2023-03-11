import { IconButton } from '@material-ui/core';
import { GitHub,  Twitter, YouTube } from '@material-ui/icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href="https://github.com/aldoprogrammer" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/aldo-latasoba-841233172/" target="_blank">
            <LinkedInIcon />
          </IconButton> 
          <IconButton href="https://www.youtube.com/channel/UCwUmdHa1Y7TYHXEKtxRuiLg" target="_blank">
              <YouTube />
          </IconButton>
          <IconButton href="https://github.com/aldoprogrammer" target="_blank">
               <Twitter />
          </IconButton>
            
        </div>
        <p> &copy; 2023 aldo l.s.</p>
    </div>
  )
}

export default Footer