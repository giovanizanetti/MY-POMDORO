import React from 'react'
import { Toolbar, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useBreakControlStyles = makeStyles((theme) => ({
  root: {},
  m: {
    margin: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(1),
  },
}))

const BreakControl = ({ isActive, setIsActive, time, setTime }) => {
  const { root, m, mr } = useBreakControlStyles()
  return (
    <>
      <Toolbar variant='dense' className={root}>
        <Button
          onClick={() => {
            setTime(300)
            setIsActive(true)
          }}
          variant='contained'
          className={m}
        >
          <Icon className={mr}>local_cafe</Icon>
          Short Break
        </Button>
        <Button
          onClick={() => setIsActive(!isActive)}
          className={m}
          variant='contained'
        >
          <Icon className={mr}>self_improvement</Icon>
          Long Break
        </Button>
        <Button
          onClick={() => {
            setIsActive(false)
            setTime(1500)
          }}
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
