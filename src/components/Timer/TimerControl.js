import React from 'react'
import { Toolbar, Button } from '@material-ui/core'

const TimerControl = (props) => {
  return (
    <>
      <div>TimerControl</div>
      <Toolbar variant='dense'>
        <Button variant='contained'>Default</Button>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
      </Toolbar>
    </>
  )
}

export default TimerControl
