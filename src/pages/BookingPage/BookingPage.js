// import React, { useState } from "react";
import "./Booking.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardInfo from "./CardInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/LPlogo.png";
import { useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Booking() {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");
	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);
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
				console.log(result);
				setData(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<Box className="tablemanager">
			<div className="booking_nav-bar">
				<div className="bookingpage_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="booking_headers">
					<form className="SearchingForm">
						<Paper component="form">
							<InputBase
								sx={{ width: "90%" }}
								placeholder="Locate nearby charging stations.."
								inputProps={{
									"aria-label": "Locate nearby charging stations..",
								}}
								onChange={(event) => {
									setInput(event.target.value);
									console.log(input);
								}}
							/>

							<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
					</form>
				</div>
			</div>

			<center>
				<Grid container spacing={2} style={{ width: "90%" }}>
					{data.map((item, index) => (
						<Grid item xs={12} md={4} sm={6} lg={3} key={index}>
							<CardInfo
								name={item.station_name}
								address={item.location}
								number={item.phone_no}
								value={item.star_rating}
								workinghours={item.working_hours}
							/>
						</Grid>
					))}
				</Grid>
			</center>
		</Box>
	);
}
