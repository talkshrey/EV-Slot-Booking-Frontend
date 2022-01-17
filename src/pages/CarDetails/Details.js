import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/LPlogo.png";
import cover from "../../assets/images/cover.png";
import { useState } from "react";

export default function Details() {

    const [model, setModel] = useState()
    const [type, setType] = useState()
    const [reg, setReg] = useState()
    const [vin, setVin] = useState()

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token e9f8d73db43969b2613ac1eee60f4aae258ddfc5");
    myHeaders.append("Cookie", "csrftoken=9G4FaPL7CN11nJAhTTLLNd48zCvchBmcrDKrsVkGgZN1NblNX29YJFRR8WkTYbD1");
      
    const handleSubmit = (event) => {

        event.preventDefault();

        var formdata = new FormData();
        formdata.append("registration_no", reg);
        formdata.append("vehicle_identification_no", vin);
        formdata.append("vehicle_model", model);
        formdata.append("plug_type", type);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        
        fetch("https://findmyplug.herokuapp.com/vehicles/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
                <img src={logo} alt="logo" style={{ marginTop: '25px', display: "flex", justifyContent: 'flex-start', marginLeft: '25px' }} />
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
                        sx={{ mt: 0, fontWeight: "bold" }}
                    >
                        REGISTER  YOUR DRIVE
                    </Typography>
                    <Typography component="h6">to continue and book your slot</Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt:1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            id="model"
                            label="Model"
                            name="Model"
                            autoComplete="Model"
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                            onChange={(e)=>setModel(e.target.value)}
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
                            onChange={(e)=>setType(e.target.value)}

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
                            onChange={(e)=>setReg(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            name="VIN"
                            label="VIN"
                            type="number"
                            id="VIN"
                            sx={{ mt: 3, mb: 2, mr: 5, width: "400px" }}
                            onChange={(e)=>setVin(e.target.value)}
                        />

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{
                                    width: "300px",
                                    height: "50px",
                                    mt: 4,
                                    fontWeight: '600',
                                    textAlign: "center",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    color: "#1F2128",
                                    borderColor: "#1F2128",
                                    ":hover":{
                                        color: '#69FFF1',
                                        backgroundColor: '#1F2128'
                                    }
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
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: '#1F2128',
                }}
            >
                <img
                    src={cover}
                    alt="cover-img"
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
