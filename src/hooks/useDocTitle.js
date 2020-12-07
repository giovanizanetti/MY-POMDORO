import { useEffect } from 'react'

export const useDocTitle = ([userChoice, title]) => {
  useEffect(() => {
    if (userChoice) document.title = title
    else document.title = 'My Pomodoro'
  }, [userChoice, title])
}
