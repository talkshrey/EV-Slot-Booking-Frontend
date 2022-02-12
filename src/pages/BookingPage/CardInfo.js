import "./CardInfo.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

function truncate(str, no_words) {
	return str.split(" ").splice(0, no_words).join(" ");
}

export default function CardInfo(props) {
	const navigate = useNavigate();
	return (
		<Card className="card_grid">
			<CardMedia
				className="card_media"
				component="img"
				height="150"
				image="https://wallpapercave.com/wp/wp3399378.jpg"
				alt="green iguana"
				border="5px  #1F2128"
				// border radius = "50px"
			/>
			<CardContent className="card_content">
				<Typography variant="body2" color="text.secondary" className="st_name">
					Station Name : {/*{truncate(props.name, 3)}*/} {props.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					className="address"
					sx={{ fontFamily: "sans-serif" }}
				>
					Address : {truncate(props.address, 9)}
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
							style={{ color: "#69FFF1", textAlign: "center" }}
						/>
					</div>
				</div>
				<CardActions className="buttons">
					<Button
						className="rate_button"
						onClick={() => {
							navigate("/review");
						}}
						component="span"
						sx={{
							border: 1,
							borderColor: "#69FFF1",
							color: "#69FFF1",
							display: "flex",
							flexGrow: 1,
							"&:hover": {
								backgroundColor: "#69FFF1",
								color: "black",
								fontWeight: "bolder",
								border: 2,
							},
						}}
					>
						Rate
					</Button>
					<Button
						className="book_button"
						onClick={() => {
							navigate("/book");
						}}
						sx={{
							border: 1,
							borderColor: "#69FFF1",
							color: "#69FFF1",
							display: "flex",
							flexGrow: 1,
							"&:hover": {
								backgroundColor: "#69FFF1",
								color: "black",
								fontWeight: "bolder",
								border: 2,
							},
						}}
					>
						Book
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
}
