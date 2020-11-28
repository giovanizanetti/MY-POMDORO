import React, { createContext, useReducer } from 'react'
import Reducer from '../reducers/settings'

let initialState = {
  automaticBreak: true,
  automaticPomodoro: true,
  alarmSong: '',
  displayBreakMenu: true,
  displayDocTitleTimer: true,
  longBreakLength: 9000,
  lunchBreakLength: 2600,
  playSong: true,
  pomodoroLength: 1500,
  pomodoroCount: 0,
  pomodoroDailyTarget: 0,
  pomodoroWeeklyTarget: 0,
  sendNotifications: true,
  shortBreak: 300,
  error: null,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
