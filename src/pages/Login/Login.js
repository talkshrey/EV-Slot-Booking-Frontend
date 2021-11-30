// import React from "react";
// import login from "../../assets/images/login.jpg";
// import "./Login.css";

// function Images() {
// 	return (
// 		<div className="container">
// 			<div className="div">DIV</div>
// 			<div>
// 				<button className="login_text">Login</button>
// 				<button className="signup_text">Sign Up</button>
//                 <p className="welcome_text">Welcome</p>
// 				<img
// 					className="loginImg"
// 					src={login}
// 					alt="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg"
// 				/>

// 			</div>
// 		</div>
// 	);
// }

// export default Images;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { color } from "@mui/system";
import SignInSide from "../Signup/Signup";

export default function LoginSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
	};

	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={12}
				sm={8}
				md={7}
				component={Paper}
				elevation={6}
				square
				backgroundColor="#ececed"
			>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						display="flex"
						flexDirection="column"
						alignItems="right"
						sx={{ mt: 8, fontWeight: "bold" }}
					>
						SIGN IN
					</Typography>
					<Typography component="h6">to continue and book your slot</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<Button
							type="submit"
							fullWidth
							variant="outlined"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				xs={false}
				sm={false}
				md={5}
				sx={{
					backgroundImage:
						"login.jpg",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Button
					className="login_button"
					type="button"
					variant="contained"
					sx={{
						mt: 2,
						mb: 2,
						mr: 56,
						ml: -1,
						backgroundColor: "#ececed",
						color: "black",
						fontWeight: "bold",
					}}
					onClick={LoginSide}
				>
					Login
				</Button>
				<Button
					type="button"
					variant="contained"
					onClick={SignInSide}
					sx={{
						mt: 1,
						mb: 2,
						mr: 54,
						ml: -1,
						backgroundColor: "#ececed",
						color: "black",
						fontWeight: "bold",
					}}
				>
					Sign Up
				</Button>
				<Typography
					component="h1"
					variant="h5"
					fontWeight="bolder"
					fontSize="40px"
					sx={{ mt: "10%" }}
				>
					Welcome
				</Typography>
			</Grid>
		</Grid>
	);
}
