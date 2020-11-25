import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
}))

const Timer = (props) => {
  const { root } = useTimerStyles()
  const [time, setTime] = useState(1500)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  return (
    <>
      <div>
        <span className={root}>{`${minutes}:${seconds}`}</span>
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
