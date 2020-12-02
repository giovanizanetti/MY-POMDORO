import React, { createContext, useReducer, useEffect } from 'react'
import Reducer from '../reducers/settings'

let initialState = {
  automaticBreak: true,
  automaticPomodoro: true,
  alarmSong: '/songs/alarm_not_too_loud.mp3',
  displayBreakMenu: true,
  displayDocTitleTimer: true,
  longBreakLength: 900,
  lunchBreakLength: 2700,
  playSong: true,
  pomodoroLength: 1500,
  pomodoroCount: 0,
  pomodoroDailyTarget: 0,
  pomodoroWeeklyTarget: 0,
  sendNotifications: true,
  shortBreakLength: 3,
  // those below are not settings
  openSettings: false,
  openLogs: false,
  timerType: 'pomodoro',
  currentSession: {},
}

// local storage user's saved settings
const lsState =
  localStorage.userSettings && JSON.parse(localStorage.userSettings)
// merge with initial state
initialState = { ...initialState, ...lsState }

const Store = ({ children }) => {
  //use mergerd state here
  const [state, dispatch] = useReducer(Reducer, initialState)

  // extract and save only user's settings properties
  const {
    automaticBreak,
    automaticPomodoro,
    alarmSong,
    displayBreakMenu,
    displayDocTitleTimer,
    longBreakLength,
    lunchBreakLength,
    playSong,
    pomodoroLength,
    pomodoroCount,
    pomodoroDailyTarget,
    pomodoroWeeklyTarget,
    sendNotifications,
    shortBreakLength,
  } = state

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const settings = {
    automaticBreak,
    automaticPomodoro,
    alarmSong,
    displayBreakMenu,
    displayDocTitleTimer,
    longBreakLength,
    lunchBreakLength,
    playSong,
    pomodoroLength,
    pomodoroCount,
    pomodoroDailyTarget,
    pomodoroWeeklyTarget,
    sendNotifications,
    shortBreakLength,
  }
  // Update the local storage everytime the state is updated
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings))
    console.log(JSON.parse(localStorage.userSettings))
    console.log(state)
  }, [settings, state])

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
