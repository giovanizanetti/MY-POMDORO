import React, { createContext, useReducer } from 'react'
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
  shortBreakLength: 300,
  openSettings: false,
  error: null,
  timerType: 'pomodoro',
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
