import * as React from "react";
import "./Booking.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardInfo from "./CardInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Booking() {
	return (
		<Box>
			{/* <img
				src="https://drive.google.com/uc?export=download&id=1nugV0IRHoEz8iqO7Kx80NgmmRze0oCRM"
				style={{
					marginTop: "25px",
					display: "flex",
					justifyContent: "flex-start",
					marginLeft: "25px",
				}}
				className="bp_logo"
			/>
			<div className="headers">
				<Link to="/book" className="title">
					{" "}
					<div> Book </div>{" "}
				</Link>
				<Link to="/review" className="title">
					{" "}
					<div> Reviews </div>{" "}
				</Link>
				<Link to="/payment" className="title">
					{" "}
					<div> Payment </div>{" "}
				</Link>
			</div> */}


<div className="nav-bar">
                <div className="logo"> Logo </div>
                <div className="headers">
                    <Link to="/book" className="title"> <div> Book </div> </Link>  
                    <Link to="/review" className="title"> <div> Review </div> </Link> 
                    <Link to="/payment" className="title"> <div> Payment </div> </Link> 
                </div>
            </div>


			{/* <Typography>Book</Typography>
			<Typography>Review</Typography> */}

			<Grid container spacing={2}>
				<Grid item xs={12}></Grid>
				<Grid item xs={6} sm={1}>
					<Paper></Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={3}>
					<FontAwesomeIcon icon={faChevronCircleRight} cursor="pointer" className="right_arrow" />
				</Grid>
				<Grid item xs={6} sm={1}>
					<Paper></Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Paper>
						<CardInfo />
					</Paper>
				</Grid>
				{/* <Grid item xs={6} sm={2}>
				<FontAwesomeIcon icon={faChevronCircleRight} cursor="pointer" className="right_arrow" />
				</Grid> */}
			</Grid>
		</Box>
	);
}
