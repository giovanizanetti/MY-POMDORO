import React, { useState, useEffect, useRef, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'
import BreakControl from './BreakControl'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
}))

const Timer = () => {
  const { root } = useTimerStyles()
  const [time, setTime] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const [playSong, setPlaySong] = useState(true)
  const minutes = Math.floor(time / 60) % 60
  // const audio = new Audio('/songs/beat-alarm.mp3')
  const audioRef = useRef()

  const seconds = () => {
    const formatedSeconds = `0${time % 60}`
    return time % 60 < 10 ? formatedSeconds : time % 60
  }

  const playSound = useCallback(() => {
    audioRef.current.play()
    setTimeout(() => stopSound(), 20000)
  }, [])

  const stopSound = () => {
    audioRef.current.pause()
  }

  useEffect(() => {
    let interval = null
    if (time === 0) {
      setIsActive(false)
      playSong && playSound() //play sound if the user choose to
    }
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, time, playSound, playSong])

  return (
    <>
      <audio ref={audioRef} src='/songs/beat-alarm.mp3' />
      <div>
        <button onClick={() => stopSound()}>BOTao</button>

        <BreakControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
          playSong={playSound}
          setPlaySong={setPlaySong}
        />
        <span className={root}>{`${minutes}:${seconds()}`}</span>
        <TimerControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
          playSong={playSound}
          setPlaySong={setPlaySong}
        />
      </div>
    </>
  )
}

export default Timer
