import React, { useState } from "react";
import login from "../../assets/images/login.jpg";
import logo from "../../assets/images/LPlogo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
	const [person, setPerson] = useState({ email: '', password: '', phone: '', pincode: '' });
	const [people, setPeople] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setPerson({ ...person, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (person.email && person.password && person.phone && person.pincode) {
			const newPerson = { ...person };
			setPeople([...people, newPerson]);
			setPerson({ email: '', password: '', phone: '', pincode: '' });

			var formdata = new FormData();
			formdata.append("email", newPerson.email);
			formdata.append("password", person.password);
			formdata.append("phone", person.phone);
			formdata.append("pincode", person.pincode);

			var requestOptions = {
				method: 'POST',
				body: formdata,
				redirect: 'follow'
			};

			fetch("https://findmyplug.herokuapp.com/register/", requestOptions)
				.then(response => response)
				.then(result => console.log(result))
				.catch(error => console.log('fgsla', error));
		}
	};



	let navigate = useNavigate();

	return (
		<Grid
			container
			component="main"
			sx={{
				height: "100vh",
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
				<img src={logo} alt="logo" style={{ marginTop: '25px', display: "flex", justifyContent: 'flex-start', marginLeft: '25px' }} />
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
							id="email"
							label="Email"
							name="email"
							value={person.email}
							onChange={handleChange}
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
							value={person.password}
							onChange={handleChange}
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
							value={person.phone}
							onChange={handleChange}
							type="number"
							id="phone_number"
							sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
						/>
						<TextField
							margin="normal"
							required
							name="pincode"
							label="Pincode"
							value={person.pincode}
							onChange={handleChange}
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
								onClick={handleSubmit}
								sx={{
									width: "300px",
									height: "50px",
									mt: 4,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
								}}
							>
								Sign Up
							</Button>
						</Box>
					</Box >
				</Box >
			</Grid >

			<Grid
				item
				xs={false}
				sm={false}
				md={4}
				sx={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "#1F2128",
				}}
			>
				<img
					src={login}
					alt="cover-img"
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
		</Grid >
	);
}
