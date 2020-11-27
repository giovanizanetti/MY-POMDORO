import React, { createContext, useReducer } from 'react'
import Reducer from './reducers/settings'

let initialState = {
  playSong: true,
  alarmSong: '',
  sendNotifications: true,
  pomodoroLength: 1500,
  shortBreak: 300,
  longBreakLength: 9000,
  lunchBreakLength: 2600,
  displayBreakMenu: true,
  automaticBreak: true,
  automaticPomodoro: true,
  pomodoroCount: 0,
  pomodoroDailyTarget: 0,
  pomodoroWeeklyTarget: 0,
  displayDocTitleTimer: true,
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
