import React from 'react'
import { Toolbar, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useBreakControlStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap',
  },
  m: {
    margin: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(1),
  },
}))

const BreakControl = ({ setIsActive, setTime }) => {
  const { root, m, mr } = useBreakControlStyles()

  const handleBreak = (breakLengh) => {
    setTime(breakLengh)
    setIsActive(true)
  }

  return (
    <>
      <Toolbar variant='dense' className={root}>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(300)}
          variant='contained'
          className={m}
        >
          <Icon className={mr}>local_cafe</Icon>
          Short Break
        </Button>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(900)}
          className={m}
          variant='contained'
        >
          <Icon className={mr}>self_improvement</Icon>
          Long Break
        </Button>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(2700)}
          className={m}
          variant='contained'
        >
          <Icon className={mr}>restaurant</Icon>
          Lunch Break
        </Button>
      </Toolbar>
    </>
  )
}

export default BreakControl
