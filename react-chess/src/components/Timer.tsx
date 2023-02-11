import React, {FC} from 'react'
import { Player } from '../models/Player'

interface TimerProps {
currentPlayer: Player
  restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  return (
    <div>
      <button onClick={restart}>
        Restart game
      </button>
    </div>
  )
}

export default Timer