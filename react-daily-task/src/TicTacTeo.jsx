import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Button } from "@mui/material";

export function TicTacTeo() {
    const { width, height } = useWindowSize()
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [isXTurn, setIsXTurn] = useState(true);
    const handleClick = (index) => {
        console.log(index);
        if (!winner && board[index] === null) {
            const boardCopy = [...board];
            boardCopy[index] = isXTurn ? "X" : "O";
            setBoard(boardCopy);
            setIsXTurn(!isXTurn);
        }
    };
    const decideWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
                console.log("Winner", board[a]);
                return board[a];
            }
        }
        return null;
    };
    const winner = decideWinner(board);
    const restartGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])

        setIsXTurn(true);
    }
    return (
        <div className="tic-tac-teo">
            {winner ? <Confetti
                width={width}
                height={height}
            /> : null}
            <h1> TicTacTeo Game</h1>
            <div className="borad">
                {board.map((val, index) => (< GameBox val={val} onplayerClick={() => handleClick(index)} />))}
            </div>
            <Button onClick={restartGame} variant="contained" >Restart</Button>
            {winner ? <h1> The winner is : {winner}</h1> : null}
        </div>

    );
}
function GameBox({ val, onplayerClick }) {
    // const [val, setVal] = useState(" ");
    const styles = {
        color: val === "X" ? "green" : "red",

    };
    return (
        <div className="game-box" onClick={onplayerClick} style={styles} > {val}</div>
    )
}