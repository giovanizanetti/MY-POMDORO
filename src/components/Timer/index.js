import React, { useState, useEffect, useRef, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimerControl from './TimerControl'
import BreakControl from './BreakControl'
import { IconButton, Icon } from '@material-ui/core'
import { Context } from '../../StoreProvider/index'
import { SET_CURRENT_SESSION, SET_END_TIME_AND_SAVE } from '../../types'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
  ml: {
    marginLeft: theme.spacing(-2),
  },
}))

const Timer = () => {
  const [state, dispatch] = useContext(Context)
  const { root, ml } = useTimerStyles()
  const [time, setTime] = useState(state.pomodoroLength)
  const [isActive, setIsActive] = useState(false)
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const minutes = Math.floor(time / 60) % 60
  const audioRef = useRef()
  const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60
  const countDown = `${minutes}:${seconds}`
  const pomodoro = 'pomodoro'

  if (state.displayDocTitleTimer) document.title = countDown
  else document.title = 'My Pomodoro'

  useEffect(() => {
    localStorage.clear()
    dispatch({ type: SET_CURRENT_SESSION, payload: {} })
    console.log(localStorage)
  }, [dispatch])

  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      Notification.requestPermission()
    }
  }, [])

  // Song play
  useEffect(() => {
    setIsSongPlaying(false) // in initial render clear cashed sound

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
    const handleTimeOver = () => {
      const message =
        state.currentSession.session === pomodoro
          ? 'Pomodoro is over. Take some stretch'
          : 'Break is over! Time to to focus!.'

      if (state.sendNotifications) new Notification(message)

      const payload = new Date().toLocaleTimeString('en-GB')

      dispatch({ type: SET_END_TIME_AND_SAVE, payload })
      if (state.automaticBreak)
        setTimeout(() => {
          setTime(state.shortBreakLength)
          setIsActive(true)
        }, 3000)
    }

    let interval = null
    if (time === 0) {
      setIsActive(false)
      handleTimeOver()
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
  }, [
    isActive,
    time,
    state.playSong,
    pomodoro,
    state.automaticBreak,
    state.automaticPomodoro,
    state.sendNotifications,
    state.pomodoroLength,
    state.timerType,
    state.shortBreakLength,
    dispatch,
    state.currentSession,
    state.currentSession.endTime,
  ])

  const handleStart = (sessionType) => {
    setIsActive(true)
    dispatch({
      type: SET_CURRENT_SESSION,
      payload: {
        session: sessionType,
        startTime: new Date().toLocaleTimeString('en-GB'),
        id: Date.now(),
      },
    })
    console.log(state.currentSession)
  }

  return (
    <>
      <audio
        disableRemotePlayback={true}
        ref={audioRef}
        src={state.alarmSong}
      />
      <div>
        {state.displayBreakMenu && (
          <BreakControl
            isActive={isActive}
            handleStart={handleStart}
            setTime={setTime}
          />
        )}
        {isSongPlaying && (
          <IconButton className={ml} onClick={() => setIsSongPlaying(false)}>
            <Icon color='secondary'>music_off</Icon>
          </IconButton>
        )}

        <span className={root}>{countDown}</span>

        <TimerControl
          handleStart={handleStart}
          isActive={isActive}
          setIsActive={setIsActive}
          setTime={setTime}
        />
      </div>
    </>
  )
}

export default Timer
