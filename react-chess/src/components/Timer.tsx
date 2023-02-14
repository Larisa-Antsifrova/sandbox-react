import React, { FC, useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { clearInterval } from 'timers'
import { Color } from '../models/Color'

interface TimerProps {
currentPlayer: Player
  restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [whiteTime, setWhiteTime] = useState(300)
  const [blackTime, setBlackTime] = useState(300)

  const timer = useRef<null|ReturnType<typeof setInterval>>(null)

  useEffect(()=>{
    startTimer()
  },[currentPlayer])

  function startTimer(): void {
    if(timer.current){
      clearInterval(timer.current)
    }

    const callback = currentPlayer.color === Color.WHITE ? decrementWhiteTimer : decrementBlackTimer

    timer.current = setInterval(callback, 1000)
  }

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