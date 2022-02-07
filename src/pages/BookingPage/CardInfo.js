import "./CardInfo.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function CardInfo(props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://wallpapercave.com/wp/wp3399378.jpg"
        alt="green iguana"
      />
      <CardContent className="card_content">
        <Typography variant="body2" color="text.secondary" className="st_name">
          Station Name : {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="address">
          Address : {props.address}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="ph_number"
        >
          Phone Number : {props.number}
        </Typography>
        <div className="star_rating">
          <div>
            <Rating
              name="simple-controlled"
              value={props.value}
              style={{ color: "#69FFF1" }}
            />
          </div>
        </div>
        <CardActions className="buttons">
          <Button className="save_button">Save</Button>
          <Button size="small">Book</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
