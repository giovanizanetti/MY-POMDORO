import React, { useEffect, useRef, useContext } from 'react'
import { usePlaySong } from '../../hooks/usePlaySong'
import { useTimer } from '../../hooks/useTimer'
import { useBrowserNotification } from '../../hooks/useBrowserNotification'
import { useDocTitle } from '../../hooks/useDocTitle'
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
  const [time, setTime, isActive, setIsActive] = useTimer([state.pomodoroLength])
  const audioRef = useRef()
  const [isSongPlaying, setIsSongPlaying] = usePlaySong([state.alarmSong, audioRef])

  const minutes = Math.floor(time / 60) % 60
  const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60
  const countDown = `${minutes}:${seconds}`
  const pomodoro = 'pomodoro'

  const message =
    state.currentSession.session === pomodoro
      ? 'Pomodoro is over. Have some stretch'
      : 'Break is over! Time to to focus!.'

  const [setSendNotification] = useBrowserNotification([state.sendNotifications, message])
  // Display timer on document title
  useDocTitle([state.displayDocTitleTimer, countDown])

  // start with a clean current session
  useEffect(() => {
    dispatch({ type: SET_CURRENT_SESSION, payload: {} })
  }, [dispatch])

  useEffect(() => {
    const handleTimeOver = () => {
      setSendNotification(true)
      const payload = new Date().toLocaleTimeString('en-GB')

      dispatch({ type: SET_END_TIME_AND_SAVE, payload })
      if (state.automaticBreak)
        setTimeout(() => {
          setTime(state.shortBreakLength)
          setIsActive(true)
        }, 3000)
    }

    if (time === 0) {
      setIsActive(false)
      handleTimeOver()
      state.playSong && setIsSongPlaying(true) // play sound if is set in the user's settings
    }
  }, [
    time,
    state.playSong,
    state.automaticBreak,
    state.shortBreakLength,
    dispatch,
    setIsSongPlaying,
    setIsActive,
    setTime,
    setSendNotification,
  ])

  const handleStart = (sessionType) => {
    setIsActive(true)
    dispatch({
      type: SET_CURRENT_SESSION,
      payload: {
        date: new Date().toLocaleDateString('en-GB'),
        session: sessionType,
        startTime: new Date().toLocaleTimeString('en-GB'),
        id: Date.now(),
      },
    })
  }

  return (
    <>
      <audio disableRemotePlayback={true} ref={audioRef} src={state.alarmSong} />
      <div>
        {state.displayBreakMenu && <BreakControl isActive={isActive} handleStart={handleStart} setTime={setTime} />}
        {isSongPlaying && (
          <IconButton className={ml} onClick={() => setIsSongPlaying(false)}>
            <Icon color='secondary'>music_off</Icon>
          </IconButton>
        )}
        <span className={root}>{countDown}</span>
        <TimerControl handleStart={handleStart} isActive={isActive} setIsActive={setIsActive} setTime={setTime} />
      </div>
    </>
  )
}

export default Timer
