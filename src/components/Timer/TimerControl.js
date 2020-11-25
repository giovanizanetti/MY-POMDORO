import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PlayArrow, Stop, Restore, Pause } from '@material-ui/icons'

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

const TimerControl = ({ isActive, setIsActive }) => {
  const { root, buttonSecondary, controllers } = useTimerControlStyles()
  return (
    <>
      <div>TimerControl</div>
      <Toolbar variant='dense' className={root}>
        <Button
          onClick={() => setIsActive(true)}
          variant='contained'
          className={buttonSecondary}
        >
          <PlayArrow />
          Start
        </Button>
        <Button className={controllers} variant='contained' color='primary'>
          <Pause />
          Pause
        </Button>
        <Button className={controllers} variant='contained' color='secondary'>
          <Stop />
          Cancel
        </Button>
        <Button className={controllers} variant='contained' color='default'>
          <Restore />
          Reset
        </Button>
      </Toolbar>
    </>
  )
}

export default TimerControl
