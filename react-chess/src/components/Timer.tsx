import React, { FC, useState } from 'react'
import { Player } from '../models/Player'

interface TimerProps {
currentPlayer: Player
  restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [whiteTime, setWhiteTime] = useState(300)
  const [blackTime, setBlackTime] = useState(300)

  function startTimer(): void {}

  function decrementWhiteTimer(): void {
    setWhiteTime(prevState => prevState - 1)
  }

  function decrementBlackTimer(): void {
    setBlackTime(prevState => prevState - 1)
  }



  return (
    <div>
      <button onClick={restart}>
        Restart game
      </button>

      <h2>White - {whiteTime}</h2>
      <h2>Black - {blackTime}</h2>
    </div>
  )
}

export default Timer