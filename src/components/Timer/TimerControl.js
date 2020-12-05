import React, { useContext, useEffect, useState } from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PlayArrow, Restore, Pause } from '@material-ui/icons'
import { Context } from '../../StoreProvider'

const useTimerControlStyles = makeStyles((theme) => ({
  desktop: { justifyContent: 'center' },
  mobile: { justifyContent: 'center', flexDirection: 'column' },
  buttonSecondary: {
    color: 'rgba(0,0,0,.87)',
    backgroundColor: '#4caf50',
    margin: theme.spacing(1),
  },
  controllers: {
    margin: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(0.6),
  },
}))

const TimerControl = ({ isActive, setIsActive, setTime, handleStart }) => {
  const [state] = useContext(Context)

  let initialScreenSize = window.innerWidth < 600 ? true : false
  const [isMobileScreen, setIsMobileScreen] = useState(initialScreenSize)
  const { desktop, mobile, buttonSecondary, controllers, mr } = useTimerControlStyles()

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setIsMobileScreen(true)
      else setIsMobileScreen(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Toolbar variant='dense' className={isMobileScreen ? mobile : desktop}>
        <Button
          fullWidth={true}
          onClick={() => !isActive && handleStart('pomodoro')}
          variant='contained'
          className={buttonSecondary}
        >
          <PlayArrow />
          Start
        </Button>
        <Button
          fullWidth={true}
          onClick={() => setIsActive(!isActive)}
          className={controllers}
          variant='contained'
          color='default'
        >
          <Pause />
          Pause
        </Button>
        <Button
          fullWidth={true}
          onClick={() => {
            setIsActive(false)
            setTime(state.pomodoroLength)
          }}
          className={controllers}
          variant='contained'
          color='secondary'
        >
          <Restore className={mr} />
          Reset
        </Button>
      </Toolbar>
    </>
  )
}

export default TimerControl
