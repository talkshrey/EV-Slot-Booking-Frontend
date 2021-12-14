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
import { logo } from "../../assets/images/LPlogo.png"

export default function Details() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <Grid container component="main" sx={{ height: "100vh", overflow: "hidden" }}>
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
                <img src="https://drive.google.com/uc?export=download&id=1nugV0IRHoEz8iqO7Kx80NgmmRze0oCRM" style={{ marginTop: '25px', display: "flex", justifyContent: 'flex-start', marginLeft: '25px' }} />
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
                        REGISTER  YOUR DRIVE
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
                            id="model"
                            label="Model"
                            name="Model"
                            autoComplete="Model"
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                        />

                        <TextField
                            margin="normal"
                            required
                            name="plug_type"
                            label="Plug Type"
                            type="text"
                            id="plug_type"
                            autoComplete="plug type"
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="Vehicle registration no."
                            label="Vehicle registration no."
                            type="text"
                            id="Vehicle registration no."
                            autoComplete="Vehicle registration no."
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                        />

                        <TextField
                            margin="normal"
                            required
                            name="VIN"
                            label="VIN"
                            type="number"
                            id="VIN"
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                    // ml: "30%",
                                }}
                            >
                                Submit
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
                    // backgroundImage: url("https://drive.google.com/uc?export=download&id=1mUkyIFzvbAv64pRdRwrr3D10BR-tYUzA"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: '#1F2128',
                }}
            >
                <img
                    src="https://drive.google.com/uc?export=download&id=1mUkyIFzvbAv64pRdRwrr3D10BR-tYUzA"
                    style={{ width: "100%", height: "100vh" }}
                />

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
                    Welcome, Back
                </Typography>
            </Grid>
        </Grid>
    );
}
