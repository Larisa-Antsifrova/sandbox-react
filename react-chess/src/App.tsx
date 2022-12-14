import React, { useEffect, useState } from 'react'
import './App.css';
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(()=>{
    restart()
  }, [])

  function restart():void {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  return (
    <div className="app">
     <h1>Chess app</h1>

      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
