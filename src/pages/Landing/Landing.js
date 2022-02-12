import React, { useState } from 'react'
import landingScreenImg from '../../assets/images/landing.png'
import './Landing.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Landing() {
  const [input, setInput] = useState('');

  return (
    <div className='landingContainer'>
      <div className="landingImg">
        <div className="overlay">
          <img src={landingScreenImg} className='landingScreenImg' alt="cover"/>
        </div>
      </div>
      <div className="SearchBar">
        <form className='searchForm'>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Locate nearby charging stations.."
              inputProps={{ 'aria-label': 'Locate nearby charging stations..' }}
              onChange={(event)=>{
                setInput(event.target.value)
                console.log(input)
              }}
            />

            <IconButton 
              type="submit"
              sx={{ p: '10px' }} 
              aria-label="search" 
            >
              <SearchIcon />
            </IconButton>

          </Paper>

        </form>
      </div>
    </div>
  )
}

export default Landing
