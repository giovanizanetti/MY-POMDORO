import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'
import BreakControl from './BreakControl'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
}))

const Timer = (props) => {
  const { root } = useTimerStyles()
  const [time, setTime] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const minutes = Math.floor(time / 60) % 60

  const seconds = () => {
    const formatedSeconds = `0${time % 60}`
    return time % 60 < 10 ? formatedSeconds : time % 60
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      time === 0 && setIsActive(false) // Stop the timer
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  return (
    <>
      <div>
        <BreakControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
        />
        <span className={root}>{`${minutes}:${seconds()}`}</span>
        <TimerControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
        />
      </div>
    </>
  )
}

export default Timer
