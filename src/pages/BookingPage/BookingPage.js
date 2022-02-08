import "./Booking.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardInfo from "./CardInfo";
import logo from "../../assets/images/LPlogo.png";
import { useEffect, useState } from "react";

export default function Booking() {
	const [data, setData] = useState([])
	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append(
		  "Authorization",
		  `Token ${localStorage.getItem('token')}`
		);
		myHeaders.append(
		  "Cookie",
		  "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump"
		);
	
		var requestOptions = {
		  method: "GET",
		  headers: myHeaders,
		  redirect: "follow",
		};
	
		fetch("https://findmyplug.herokuapp.com/station/", requestOptions)
		  .then((response) => response.json())
		  .then((result) => {
			console.log(result)
			setData(result)
		  })
		  .catch((error) => console.log("error", error));
	  }, []);


  return (
    <Box>
      <div className="nav-bar">
                <div className="logo"> <img src={logo} alt="logo"/> </div>
                <div className="headers">
                    <Link to="/booking" className="title"> <div> Book </div> </Link>  
                    <Link to="/review" className="title"> <div> Reviews </div> </Link> 
                    <Link to="/payment" className="title"> <div> Payment </div> </Link> 
                </div>
            </div>

      <Grid container spacing={2}>
		  {data.map((item, index)=> <Grid item xs={3} key={index}> <Paper> <CardInfo name={item.station_name} address={item.location} number={item.phone_no} value={item.star_rating}/> </Paper>  </Grid> )}
      </Grid>
    </Box>
  );
}
