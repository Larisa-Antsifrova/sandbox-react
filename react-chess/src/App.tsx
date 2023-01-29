import React, { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Color } from './models/Color'

function App() {
  const [board, setBoard] = useState(new Board())

  const [whitePlayer, setWhitePlayer] = useState(new Player(Color.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Color.BLACK))

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(()=>{
    restart()

    setCurrentPlayer(whitePlayer)
  }, [])

  function restart():void {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
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
