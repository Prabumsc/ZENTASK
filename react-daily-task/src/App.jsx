import Stack from '@mui/material/Stack';
import "./App.css"
import { MovieList } from "./MovieList";
import { Welcome } from "./Welcome";
import { AddColor } from "./AddColor";
import { Movie } from "./Movie";

export default function App() {
  const names = ["sethupathy", "Gowtham", "Ajith", "abdula", "Arun"];
  const users = [
    {
      name: "Gopi",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRQ-xvoO5LW2ClJRlQ5CC8wmzppKSjMV-PdCdFrisLO4bmY_zn39DVDXav4XPDXt_P4Y&usqp=CAU"
    },
    {
      name: "prabu",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRQ-xvoO5LW2ClJRlQ5CC8wmzppKSjMV-PdCdFrisLO4bmY_zn39DVDXav4XPDXt_P4Y&usqp=CAU"
    },


    {
      name: "Abi",
      pic: "https://i.pinimg.com/550x/ae/ab/63/aeab636b233a5d76306bf2e9b6fcf282.jpg"
    },
    {
      name: "Bharathy",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1MxvJncPXEnfOM8isrSt0RRojekQnqo9CQ&usqp=CAU"
    },


  ];

  return (
    <div className="App">

      { /* {users.map((usr) => <Msg name={usr.name} pic={usr.pic} />)} */}

      {/* <Msg name="Gopi"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRQ-xvoO5LW2ClJRlQ5CC8wmzppKSjMV-PdCdFrisLO4bmY_zn39DVDXav4XPDXt_P4Y&usqp=CAU" />
      <Msg name="Abi"
        pic="https://i.pinimg.com/550x/ae/ab/63/aeab636b233a5d76306bf2e9b6fcf282.jpg" />
      <Msg name="Bharathy"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1MxvJncPXEnfOM8isrSt0RRojekQnqo9CQ&usqp=CAU" /> */}
      {/* <Welcome name="sethupathi" />
      <Welcome name="Gowtham" />
      <Welcome name="Ajith" />
      {names.map(nm => <Welcome name={nm} />)} */}
      <MovieList />
      {/* <AddColor /> */}


    </div>
  );
}
function Msg(props) {

  return (
    <div>
      <img className="user-pic" src={props.pic} alt="user-pic" />
      <h1>
        Hello,<span className="user-name">{props.name}</span> 🌸💐🌼🌻🌺🤩
      </h1>
      <Counter />
    </div>

  )
}

