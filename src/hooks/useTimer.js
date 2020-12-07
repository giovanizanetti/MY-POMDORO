import { useEffect, useState } from 'react'

export const useTimer = ([pomodoroLength]) => {
  const [time, setTime] = useState(pomodoroLength)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [time, isActive])

  return [time, setTime, isActive, setIsActive]
}
