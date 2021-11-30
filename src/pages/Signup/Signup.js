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


export default function SignInSide() {
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
						sx={{ mt: 8, fontWeight:"bold" }}
                        
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
							id="email"
							label="Username"
							name="email"
							autoComplete="email"
							autoFocus
                            sx={{ mt: 3, mb: 2, mr:5, }}
						/>
						<TextField
							margin="normal"
							required
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
                            sx={{ mt: 3, mb: 2, mr:5, }}
						/>
                        <TextField
							margin="normal"
							required
							name="password"
							label="Email"
							type="password"
							id="password"
							autoComplete="current-password"
                            sx={{ mt: 3, mb: 2, mr:5, }}
						/>
                        <TextField
							margin="normal"
							required
							name="password"
							label="Confirm Password"
							type="password"
							id="password"
							autoComplete="current-password"
                            sx={{ mt: 3, mb: 2, mr:5, }}
						/>
                        <TextField
							margin="normal"
							required
							name="password"
							label="Phone Number"
							type="password"
							id="password"
							autoComplete="current-password"
                            sx={{ mt: 3, mb: 2, mr:5, }}
						/>
                        <TextField
							margin="normal"
							required
							name="password"
							label="Pincode"
							type="password"
							id="password"
							autoComplete="current-password"
                            sx={{ mt: 3, mb: 2, mr:5, }}
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
							Sign Up
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				xs={false}
				sm={4}
				md={5}
				sx={{
					backgroundImage:
						"url(https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0)",
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
                        fontWeight:"bold"
                        
					}}
				>
					Login
				</Button>
				<Button
					type="button"
					variant="contained"
					sx={{
						mt: 1,
						mb: 2,
						mr: 54,
                        ml: -1,
						backgroundColor: "#ececed",
						color: "black",
                        fontWeight:"bold"
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
					Hey there!
				</Typography>
			</Grid>
		</Grid>
	);
}
