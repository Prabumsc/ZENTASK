import { useState } from "react";

export function TicTacTeo() {
    const borad = [null, null, null, null, null, null, null, null, null]
    return (
        <div>
            <h1> TicTacTeo Game</h1>
            <div className="borad">
                {borad.map(() => (< GameBox />))}
            </div>

        </div>

    );
}
function GameBox() {
    const [val, setVal] = useState(" ");
    const styles = {
        color: val === "X" ? "green" : "red",

    };
    return (
        <div className="game-box" onClick={() => setVal("X")} style={styles} > {val}</div>
    )
}