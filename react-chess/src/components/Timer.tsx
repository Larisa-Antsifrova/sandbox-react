import React, { FC, useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { clearInterval } from 'timers'
import { Color } from '../models/Color'

interface TimerProps {
currentPlayer: Player | null
  restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const defaultGameTime = 300
  const [whiteTime, setWhiteTime] = useState(defaultGameTime)
  const [blackTime, setBlackTime] = useState(defaultGameTime)

  const timer = useRef<null|ReturnType<typeof setInterval>>(null)

  useEffect(()=>{
    startTimer()
  },[currentPlayer])

  function startTimer(): void {
    if(timer.current){
      clearInterval(timer.current)
    }

    const callback = currentPlayer?.color === Color.WHITE ? decrementWhiteTimer : decrementBlackTimer

    timer.current = setInterval(callback, 1000)
  }

  function decrementWhiteTimer(): void {
    setWhiteTime(prevState => prevState - 1)
  }

  function decrementBlackTimer(): void {
    setBlackTime(prevState => prevState - 1)
  }

  function handleRestart(): void {
    setWhiteTime(defaultGameTime)
    setBlackTime(defaultGameTime)
    restart()
  }



  return (
    <div>
      <button onClick={handleRestart}>
        Restart game
      </button>

      <h2>White - {whiteTime}</h2>
      <h2>Black - {blackTime}</h2>
    </div>
  )
}

export default Timer