import * as React from "react";
import login from "../../assets/images/login.jpg";
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
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
	};

	let navigate = useNavigate();

	return (
		<Grid
			container
			component="main"
			sx={{ height: "100vh",
			 overflow: "hidden"
			 }}
		>
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
				<img
					src="https://drive.google.com/uc?export=download&id=1nugV0IRHoEz8iqO7Kx80NgmmRze0oCRM"
					style={{
						marginTop: "25px",
						display: "flex",
						justifyContent: "flex-start",
						marginLeft: "25px",
					}}
				/>

				<Box
					sx={{
						my: 3,
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
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>

						<TextField
							margin="normal"
							required
							name="email"
							label="Email"
							type="email"
							id="email"
							autoComplete="email"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>
						<TextField
							margin="normal"
							required
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>

						<TextField
							margin="normal"
							required
							name="confirm_password"
							label="Confirm Password"
							type="password"
							id="confirm_password"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>
						<TextField
							margin="normal"
							required
							name="phoneNumber"
							label="Phone Number"
							type="number"
							id="phone_number"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>
						<TextField
							margin="normal"
							required
							name="pincode"
							label="Pincode"
							type="pincode"
							id="pincode"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								type="submit"
								variant="outlined"
								sx={{
									width: "300px",
									height: "50px",
									mt: 4,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									fontWeight:"bold",
									"&:hover": { color: "#69FFF1", backgroundColor:"black"}
									
								}}
								// sx={{ "&:hover": { color: "#69FFF1", backgroundColor:"black"} }}
							>
								Sign Up
							</Button>
						</Box>
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
					backgroundColor: "#1F2128",
				}}
			>
				<img
					src="https://drive.google.com/uc?export=download&id=1mUkyIFzvbAv64pRdRwrr3D10BR-tYUzA"
					style={{ width: "100%", height: "100vh" }}
				/>
				<Button
					className="login_button"
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/login");
					}}
					sx={{
						mt: -145,
						mb: 2,
						mr: 58,
						// ml: -2,
						// borderRadius: "50%",
						// border: "red",
						padding: "10px",
						width: "100px",
						backgroundColor: "black",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						// backgroundColor:"red",
						color: "white",
						fontWeight: "bold",
						"&:hover": { color:"black", backgroundColor:"white"}
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
						backgroundColor: "black",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						// backgroundColor:"red",
						color: "white",
						fontWeight: "bold",
						"&:hover": { color:"black", backgroundColor:"white"}
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
						opacity: 1,
					}}
				>
					Hey there!
				</Typography>
			</Grid>
		</Grid>
	);
}
