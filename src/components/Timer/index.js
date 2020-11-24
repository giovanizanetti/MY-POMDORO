import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
}))

const Timer = (props) => {
  const { root } = useTimerStyles()
  const [seconds, setSeconds] = useState(1500)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <>
      <div>
        <span className={root}>{seconds}</span>
      </div>
    </>
  )
}

export default Timer
