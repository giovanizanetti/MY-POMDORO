import React, { useState, useEffect, useRef, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'
import BreakControl from './BreakControl'
import { IconButton, Icon } from '@material-ui/core'
import { Context } from '../../StoreProvider/index'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
  ml: {
    marginLeft: theme.spacing(-2),
  },
}))

const Timer = () => {
  const [state] = useContext(Context)
  const { root, ml } = useTimerStyles()
  const [time, setTime] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const minutes = Math.floor(time / 60) % 60
  const audioRef = useRef()
  const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60
  const countDown = `${minutes}:${seconds}`

  if (state.displayDocTitleTimer) document.title = countDown
  else document.title = 'My Pomodoro'

  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      Notification.requestPermission()
      new Notification('Hey')
    }
  }, [])

  // Song play
  useEffect(() => {
    setIsSongPlaying(false) // initial render do not play

    const stopSound = () => {
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
      state.playSong && setIsSongPlaying(true) // play sound if is set in the user's settings
    }
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, time, state.playSong])

  return (
    <>
      <button onClick={() => new Notification('Hey')}></button>
      <audio
        disableRemotePlayback={true}
        ref={audioRef}
        src='/songs/beat-alarm.mp3'
      />
      <div>
        {state.displayBreakMenu && (
          <BreakControl setIsActive={setIsActive} setTime={setTime} />
        )}
        {isSongPlaying && (
          <IconButton className={ml} onClick={() => setIsSongPlaying(false)}>
            <Icon color='secondary'>music_off</Icon>
          </IconButton>
        )}

        <span className={root}>{countDown}</span>

        <TimerControl
          isActive={isActive}
          setIsActive={setIsActive}
          setTime={setTime}
        />
      </div>
    </>
  )
}

export default Timer
