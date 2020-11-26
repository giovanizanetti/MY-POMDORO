import React, { useState, useEffect, useRef, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'
import BreakControl from './BreakControl'
import { IconButton, Icon } from '@material-ui/core'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
  ml: {
    marginLeft: theme.spacing(-2),
  },
}))

const Timer = () => {
  const { root, ml } = useTimerStyles()
  const [time, setTime] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const [playSong, setPlaySong] = useState(true)
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const minutes = Math.floor(time / 60) % 60
  const audioRef = useRef()

  const seconds = () => {
    const formatedSeconds = `0${time % 60}`
    return time % 60 < 10 ? formatedSeconds : time % 60
  }

  const countDown = `${minutes}:${seconds()}`

  document.title = countDown

  // Song play
  useEffect(() => {
    const stopSound = () => {
      // setIsSongPlaying(false)
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    if (isSongPlaying) {
      audioRef.current.play()
      setTimeout(() => {
        stopSound()
        setIsSongPlaying(false)
      }, 20000)
    } else {
      stopSound()
    }
  }, [isSongPlaying])

  // Countdown timer
  useEffect(() => {
    let interval = null
    if (time === 0) {
      setIsActive(false)

      playSong && setIsSongPlaying(true) // play sound if is set in the user's settings
    }
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, time, playSong])
  document.title = `${minutes}:${seconds()}`
  return (
    <>
      <audio
        disableRemotePlayback={true}
        ref={audioRef}
        src='/songs/beat-alarm.mp3'
      />
      <div>
        <BreakControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
          // playSong={playSound}
          setPlaySong={setPlaySong}
        />
        {isSongPlaying && (
          <IconButton className={ml} onClick={() => setIsSongPlaying(false)}>
            <Icon color='secondary'>music_off</Icon>
          </IconButton>
        )}

        <span className={root}>{countDown}</span>

        <TimerControl
          isActive={isActive}
          setIsActive={setIsActive}
          time={time}
          setTime={setTime}
          // playSong={playSound}
          setPlaySong={setPlaySong}
        />
      </div>
    </>
  )
}

export default Timer
