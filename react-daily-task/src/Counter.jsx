import { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div>
            <IconButton
                color="primary"
                onClick={() => setLike(like + 1)}>


                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>
            <IconButton
                color="error"
                onClick={() => setDislike(dislike + 1)} aria-label="delete">

                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>
            {/* <Button variant="contained" onClick={() => setLike(like + 1)}> 👍 {like} </Button> */}
            {/* <Button variant="contained" onClick={() => setDislike(dislike + 1)}> 👎 {dislike} </Button> */}
        </div>
    );
}
