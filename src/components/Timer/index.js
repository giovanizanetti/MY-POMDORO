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
  const [playSong, setPlaySong] = useState(false)
  const minutes = Math.floor(time / 60) % 60

  const seconds = () => {
    const formatedSeconds = `0${time % 60}`
    return time % 60 < 10 ? formatedSeconds : time % 60
  }

  useEffect(() => {
    const audio = new Audio('/songs/alarm_not_too_loud.mp3')

    let interval = null

    const handleStopSong = () => audio.pause()

    if (time === 0) {
      setIsActive(false)
      setPlaySong(true)
      audio.play()
      audio.loop = true
      // If the user not cancel the song will play for 20sec
      setTimeout(() => audio.pause(), 10000)
    }

    if (time) setPlaySong(false)
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, time, setPlaySong, playSong])

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
