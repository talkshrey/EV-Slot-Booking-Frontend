import * as React from "react";
import login from "../../assets/images/login.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
	};

	let navigate = useNavigate();

	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={12}
				sm={8}
				md={8}
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
						SIGN UP
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
							id="username"
							label="Username"
							name="username"
							autoComplete="email"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>

						<TextField
							margin="normal"
							required
							name="email"
							label="Email"
							type="email"
							id="email"
							autoComplete="email"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>
						<TextField
							margin="normal"
							required
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>

						<TextField
							margin="normal"
							required
							name="confirm_password"
							label="Confirm Password"
							type="password"
							id="confirm_password"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>
						<TextField
							margin="normal"
							required
							name="phoneNumber"
							label="Phone Number"
							type="number"
							id="phone_number"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>
						<TextField
							margin="normal"
							required
							name="pincode"
							label="Pincode"
							type="pincode"
							id="pincode"
							sx={{ mt: 3, mb: 2, mr: 5 }}
						/>

						<Button
							type="submit"
							variant="outlined"
							sx={{
								width: "250px",
								mt: 4,
								display: "flex",
								flexDirection: "column",
								ml: "30%",
							}}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				xs={false}
				sm={false}
				md={4}
				sx={{
					backgroundImage: login,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<img src="login.jpg" style={{ width: "100%", height: "100vh" }} alt="login-cover"/>
				<Button
					className="login_button"
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/");
					}}
					sx={{
						mt: -145,
						mb: 1,
						mr: 50,
						// ml: 1,
						backgroundColor: "black",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						color: "white",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						fontWeight: "bold",
					}}
				>
					Login
				</Button>
				<Button
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/signup");
					}}
					sx={{
						mt: -135,
						mb: 2,
						mr: 58,
						// ml: -2,
						// borderRadius: "50%",
						// border: "red",
						padding: "10px",
						width: "100px",
						backgroundColor: "#ececed",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						// borderRadius:"30%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						// backgroundColor:"red",
						color: "black",
						fontWeight: "bold",
					}}
				>
					Sign Up
				</Button>
				<Typography
					component="h6"
					variant="h2"
					fontWeight="bold"
					fontSize="35px"
					color="white"
					sx={{
						mt: -55,
						mr: 12,
						ml: 15,
					}}
				>
					Hey, there
				</Typography>
			</Grid>
		</Grid>
	);
}
