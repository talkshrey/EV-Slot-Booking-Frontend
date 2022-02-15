import React from 'react'
import Grid from "@material-ui/core/Grid";
import './Book.css'
import EvStationIcon from '@mui/icons-material/EvStation';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import PaymentIcon from '@mui/icons-material/Payment';
import logo from "../../assets/images/LPlogo.png";

function Book() {
    const location = useLocation();
    console.log(location.state)
    const [booking, setBooking] = useState({ station: '', capacity: '', start_time: '', end_time: '', date: '', plug: '' })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBooking({ ...booking, [name]: value ? value : null })
    }

    const handleBooking = (e) => {
        e.preventDefault();
        if (booking.station && booking.capacity && booking.start_time && booking.end_time && booking.date && booking.plug) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

            var formdata = new FormData();
            formdata.append("date", booking.date);
            formdata.append("start_time", booking.start_time);
            formdata.append("end_time", booking.end_time);
            formdata.append("units", '15');
            formdata.append("amount", "700.00");
            formdata.append("plug", booking.plug);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://findmyplug.herokuapp.com/bookings/", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }


    return (
        <>
            <img src={logo} alt="cover-img" style={{ marginTop: '25px', display: "flex", justifyContent: 'flex-start', marginLeft: '50px' }} />
            <div className='BookContent'>
                <Grid container className='BookContainerGrid'>
                    <div className='circle'>
                        <EvStationIcon className='EVIcon' />
                    </div>
                    <Grid item className='BookingInfoOuterGrid'>
                        <Grid container className='BookingDetailsGrid'>
                            <Grid item className='BookingDetailsGridItem'>
                                <p className='BookingInfo'><b>Station Name : </b>{location.state.name}</p>
                                <p className='BookingInfo'><b>Address : </b>{location.state.address}</p>
                                <p className='BookingInfo'><b>Phone Number : </b>{location.state.number}</p>
                            </Grid>
                            <Grid item>
                                <div className='priceDiv'>
                                    <h2>Price</h2>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className='BookingFormOuterDiv'>
                        <h2 style={{ textAlign: 'left' }}>Details : </h2>
                        <Grid container className='BookingFormInnerDiv'>
                            <Grid item className='textFieldContainer'>
                                <TextField
                                    margin="normal"
                                    required
                                    name="station"
                                    label="Station"
                                    value={booking.station}
                                    onChange={handleChange}
                                    type="station"
                                    id="station"
                                    className='textField'
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    name="capacity"
                                    label="Capacity"
                                    value={booking.capacity}
                                    onChange={handleChange}
                                    type="capacity"
                                    id="capacity"
                                    className='textField'
                                />
                            </Grid>
                            <Grid item className='textFieldContainer'>
                                <TextField
                                    margin="normal"
                                    required
                                    name="start_time"
                                    label="Start Time"
                                    value={booking.start_time}
                                    onChange={handleChange}
                                    type="time"
                                    id="start_time"
                                    className='textField'
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    name="end_time"
                                    label="End Time"
                                    value={booking.end_time}
                                    onChange={handleChange}
                                    type="time"
                                    id="end_time"
                                    className='textField'
                                />
                            </Grid>
                            <Grid item className='textFieldContainer'>
                                <TextField
                                    margin="normal"
                                    required
                                    name="date"
                                    label="Date"
                                    value={booking.date}
                                    onChange={handleChange}
                                    type="date"
                                    id="date"
                                    className='textField'
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    name="plug"
                                    label="Plug No."
                                    value={booking.plug}
                                    onChange={handleChange}
                                    type="plug"
                                    id="plug"
                                    className='textField'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className='BookingFormPaymentMethod'>
                        <h2 style={{ textAlign: 'left' }}>Payment Method : </h2>
                        <div className='paymentOptions'>
                            <PaymentIcon className='paymentIcon' />
                            <h2>PayTM</h2>
                        </div>
                    </Grid>
                    <Grid item className='BookingFormConfirmReview'>
                        <h3 style={{ textAlign: 'left' }} onClick={handleBooking}>Confirm Booking</h3>
                        <h3 style={{ textAlign: 'left' }}>Review</h3>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Book