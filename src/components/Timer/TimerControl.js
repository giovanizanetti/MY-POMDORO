import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PlayArrow, Restore, Pause } from '@material-ui/icons'

const useTimerControlStyles = makeStyles((theme) => ({
  root: {},
  buttonSecondary: {
    color: 'rgba(0,0,0,.87)',
    backgroundColor: '#4caf50',
    margin: theme.spacing(1),
  },
  controllers: {
    margin: theme.spacing(1),
  },
}))

const TimerControl = ({ isActive, setIsActive, time, setTime }) => {
  const { root, buttonSecondary, controllers } = useTimerControlStyles()
  return (
    <>
      <Toolbar variant='dense' className={root}>
        <Button
          onClick={() => setIsActive(true)}
          variant='contained'
          className={buttonSecondary}
        >
          <PlayArrow />
          Start
        </Button>
        <Button
          onClick={() => setIsActive(!isActive)}
          className={controllers}
          variant='contained'
          color='default'
        >
          <Pause />
          Pause
        </Button>
        <Button
          onClick={() => {
            setIsActive(false)
            setTime(1500)
          }}
          className={controllers}
          variant='contained'
          color='secondary'
        >
          <Restore />
          Reset
        </Button>
      </Toolbar>
    </>
  )
}

export default TimerControl
