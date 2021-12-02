import React from 'react'
import landingScreenImg from './image 3.png'
import './Landing.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function Landing() {
  return (
    <div className='landingContainer'>
      <div className="landingImg">
        <div className="overlay">
          <img src={landingScreenImg} className='landingScreenImg' />
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
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Paper>

        </form>
      </div>
    </div>
  )
}

export default Landing
