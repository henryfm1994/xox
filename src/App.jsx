import { useEffect, useState } from 'react';
import './App.css';

const arrayInit = ["", "", "", "", "", "", "", "", ""]
const xoInit = "x"

function App() {

  const [mark, setMark] = useState(arrayInit)
  const [xo, setxo] = useState(xoInit)

  const winCombinatios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const ping = (item) => {
    let array = Array.from(mark);
    if (array[item]) {
      return;
    } else {
      if (xo === "x") setxo("o")
      else setxo("x")

      array[item] = xo;

      winner(xo, array)

      setMark(array)
    }
  }

  const reset = () => {
    setMark(arrayInit)
  }

  const winner = (item, arr) => {
    let indices = [];
    let x = arr.indexOf(item);
    while (x !== -1) {
      indices.push(x);
      x = arr.indexOf(item, x + 1);
    }

    // winCombinatios.forEach(element => {

    //   console.log(indices[0]);
    //   const i = element[0]
    //   const j = element[1]
    //   const k = element[2]

    //   // console.log(indices[i]);

    //   // if (indices[i] && indices[i] === indices[j] && indices[i] === indices[k]) {
    //   //   console.log(xo);
    //   // }

    // });
    // return console.log("nada");
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div className='header' >
        Tic-Tac-Toe
      </div>
      <div className="main">
        <div></div>
        <div className="game">
          <button className="casilla casilla1" onClick={() => ping(0)} > {mark[0]} </button>
          <button className="casilla casilla2" onClick={() => ping(1)} > {mark[1]} </button>
          <button className="casilla casilla3" onClick={() => ping(2)} > {mark[2]} </button>
          <button className="casilla casilla9" onClick={() => ping(3)} > {mark[3]} </button>
          <button className="casilla casilla4" onClick={() => ping(4)} > {mark[4]} </button>
          <button className="casilla casilla5" onClick={() => ping(5)} > {mark[5]} </button>
          <button className="casilla casilla6" onClick={() => ping(6)} > {mark[6]} </button>
          <button className="casilla casilla7" onClick={() => ping(7)} > {mark[7]} </button>
          <button className="casilla casilla8" onClick={() => ping(8)} > {mark[8]} </button>

        </div>
        <div></div>
      </div>
      <div className='reset' >
        <button className='btn-reset' onClick={reset} >Reset</button>
      </div>
    </div >
  );
}

export default App;
