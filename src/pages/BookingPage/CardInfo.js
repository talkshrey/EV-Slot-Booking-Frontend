import * as React from "react";
import './CardInfo.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

export default function CardInfo() {

	const url = 'https://findmyplug.herokuapp.com/swagger/';
	const [item , setItem] = React.useState(null)

	axios.get(url)
		.then(response => {
			setItem(response.data)
		})

	// fetch('https://findmyplug.herokuapp.com/swagger')
	// .then(res => res.json())
	// .then(data => console.log(data))
	

	return (

<Card sx={{ maxWidth: 200 }}>
				<CardMedia
					component="img"
					height="140"
					image="https://wallpapercave.com/wp/wp3399378.jpg"
					alt="green iguana"
				/>
				<CardContent className="card_content">
					<Typography variant="body2" color="text.secondary" className="st_name">
						Station Name : Birla Town
					</Typography>
					<Typography variant="body2" color="text.secondary" className="address">
						Address : 36, China Town
					</Typography>
					<Typography variant="body2" color="text.secondary" className="ph_number">
						Phone Number : 99999999
					</Typography>
					<div className="star_rating">
						<div>
							<Rating name="simple-controlled" style={{ color: "#69FFF1" }} />
						</div>
                        
					</div>
                    <CardActions className="buttons">
					<Button className="save_button"  >Save</Button>
					<Button size="small">Book</Button>
				</CardActions>
				</CardContent>
				
			</Card>
    )
    }