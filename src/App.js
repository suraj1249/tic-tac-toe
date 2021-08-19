import Board from "./components/board/board";
import Modal from "./components/modal"
import {useState} from "react";
import './App.css';

function App() {
  const [currentTurn,setCurrentTurn] = useState('X');
  const [open,setOpen]=useState(false);
  const [result,setResult] = useState('');
  const [moves,setMoves] = useState({})
  return (
    <div className="App">
      <Modal
        open={open}
        setOpen={setOpen}
        subject={result}
        setMoves={setMoves}
        setCurrentTurn={setCurrentTurn}
      />
      <Board
        setOpen={setOpen}
        setResult={setResult}
        moves={moves}
        setMoves={setMoves}
        currentTurn={currentTurn}
        setCurrentTurn={setCurrentTurn}
      />

    </div>
  );
}

export default App;
