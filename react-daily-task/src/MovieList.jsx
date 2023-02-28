import { useState } from "react";
import Button from '@mui/material/Button';
import { Movie } from "./Movie";
import TextField from '@mui/material/TextField';




export function MovieList({ movieList, setMovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");

    return (
        <div>
            <div className='add-movie-list'>
                <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />

                <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
                <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
                <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />

                <Button variant="contained" onClick={() => {
                    const newMovie = {
                        name: name,
                        poster: poster,
                        summary: summary,
                        rating: rating,
                    };
                    setMovieList([...movieList, newMovie]);
                }}> Add Movie</Button>
            </div>

            <div className="movie-list">
                {movieList.map((mv, index) => (<Movie key={index} movie={mv} id={index} />))}

            </div>
        </div>
    );
}
