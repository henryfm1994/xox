import { useState } from 'react';
import './App.css';

const arrayInit = ["", "", "", "", "", "", "", "", ""]
const xoInit = "x"

function App() {

  const [mark, setMark] = useState(arrayInit)
  const [xo, setxo] = useState(xoInit)
  const [finish, setFinish] = useState(false)

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

    winCombinatios.forEach(element => {

      if (arr[element[0]] && mark[element[0]] === arr[element[1]] && arr[element[0]] === arr[element[2]]) {
        setFinish(true)
        return xo;
      }

    });
  }

  return (
    <div className="App">
      <div className='header' >
        Tic-Tac-Toe
      </div>
      <div className="main">
        <div></div>
        <div className="game">
          <button className="casilla" onClick={() => ping(0)} > {mark[0]} </button>
          <button className="casilla" onClick={() => ping(1)} > {mark[1]} </button>
          <button className="casilla" onClick={() => ping(2)} > {mark[2]} </button>
          <button className="casilla" onClick={() => ping(3)} > {mark[3]} </button>
          <button className="casilla" onClick={() => ping(4)} > {mark[4]} </button>
          <button className="casilla" onClick={() => ping(5)} > {mark[5]} </button>
          <button className="casilla" onClick={() => ping(6)} > {mark[6]} </button>
          <button className="casilla" onClick={() => ping(7)} > {mark[7]} </button>
          <button className="casilla" onClick={() => ping(8)} > {mark[8]} </button>
        </div>
        <div></div>
      </div>
      <div className='reset' >
        <button className='btn-reset' onClick={reset} >Reset</button>
      </div>
      {
        finish ? <div className='winner' >Winner</div> : <div></div>
      }
    </div >
  );
}

export default App;
