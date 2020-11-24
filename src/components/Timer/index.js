import React, { useState, useEfect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useTimerStyles = makeStyles((theme) => ({
  root: {
    fontSize: '100px',
  },
}))

const Timer = (props) => {
  const { root } = useTimerStyles()
  return (
    <>
      <div>
        <span className={root}>Timer</span>
      </div>
    </>
  )
}

export default Timer
