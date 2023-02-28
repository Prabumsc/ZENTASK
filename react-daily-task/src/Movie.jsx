import { useState } from "react";
import Button from '@mui/material/Button';
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import { CardActions, CardContent } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


export function Movie({ movie, id }) {
    const styles = {
        color: movie.rating > 8.5 ? "green" : "crimson",
    };
    const [show, setShow] = useState(true);
    const summaryStyles = {
        display: show ? "block" : "none",
    };
    // const movie = {
    //   "name": "Vikram",
    //   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    //   "rating": 8.4,
    //   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
    // };
    const navigate = useNavigate();
    return (
        <Card className='movie-container'>
            <div className="poster-container"><img className="movie-poster" src={movie.poster} alt="movie.poster" />
            </div>
            <CardContent>
                <div className='movie-flex'>
                    <h2 className="movie-name"> {movie.name}
                        <IconButton
                            color="primary"
                            onClick={() => setShow(!show)} aria-label="toggle summary">
                            {show ? < ExpandLessIcon /> : < ExpandMoreIcon />}
                        </IconButton></h2>
                    <InfoIcon

                        color="primary"
                        onClick={() => navigate(`/movie/${id}`)} aria-label="move-detils">

                    </InfoIcon>
                    <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
                </div>

                {/* <Button variant="contained" onClick={() => setShow(!show)}>Togglesummary</Button> */}
                {/* <p style={summaryStyles} className="movie-summary"> {movie.summary}</p> */}
                {show ? <p className="movie-summary"> {movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter />
            </CardActions>

        </Card>
    );

}
