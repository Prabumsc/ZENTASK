import { useState } from "react";

export function AddColor() {
    const [color, setColor] = useState("pink");
    const styles = {
        background: color,
    };
    const [colorList, setColorList] = useState(["crimson", "orange", "green"]);
    return (
        <div>
            <input style={styles}
                type="text"
                onChange={(event) => setColor(event.target.value)}
                vale={color} />{"  "}
            <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
            {colorList.map((clr) => (<ColorBox color={clr} />))}

        </div>
    );
}
function ColorBox({ color }) {
    const styles = {
        height: "25px",
        width: "251px",
        margin: "5px 0px",
        background: color,
    };
    return <div style={styles}></div>;
}
