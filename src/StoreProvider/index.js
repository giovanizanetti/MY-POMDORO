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

  openSettings: false,
  openLogs: false,
  timerType: 'pomodoro',
  currentSession: {},
}

// assign local state to ls state to get saved user's settings
initialState = JSON.parse(localStorage.userSettings)

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // Update the ls everytime the state is updated
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
