import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Details() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
    };

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid
                item
                xs={10}
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
                        Enter Your Car Details
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
                            name="Model"
                            label="Model"
                            type="text"
                            id="Model"
                            sx={{ mt: 3, mb: 2, mr: 5, }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="plug-type"
                            label="Plug Type"
                            type="text"
                            id="plug-type"
                            sx={{ mt: 3, mb: 2, mr: 5, }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="registration-no"
                            label="Vehicle Registration Number"
                            type="number"
                            id="reg-no"
                            sx={{ mt: 3, mb: 2, mr: 5, }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="VIN"
                            label="VIN"
                            type="text"
                            id="VIN"
                            sx={{ mt: 3, mb: 2, mr: 5, }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{
                                display: 'block',
                                mt: 4, mb: 4,
                                maxWidth: '480px',
                            }}
                        >
                            Done
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid
                item
                xs={2}
                sm={false}
                md={5}
                sx={{
                    color: 'white',
                    backgroundColor: '#1F2128',
                    backgroundImage:
                        "url(https://drive.google.com/uc?export=download&id=1mUkyIFzvbAv64pRdRwrr3D10BR-tYUzA)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

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
