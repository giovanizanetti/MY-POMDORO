import React, { createContext, useReducer } from 'react'
import Reducer from './reducers/settings'

const initialState = {
  playSong: true,
  sendBrownserNotifications: true,
  pomodoroLength: 1500,
  shortBreak: 300,
  longBreak: 9000,
  lunchBreak: 2600,
  showBreakMenu: true,

  posts: [],
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
