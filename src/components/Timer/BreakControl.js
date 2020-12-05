import { useContext, useEffect, useState } from 'react'
import { Toolbar, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Context } from '../../StoreProvider/index'

const useBreakControlStyles = makeStyles((theme) => ({
  desktop: {
    whiteSpace: 'nowrap',
  },
  mobile: {
    flexDirection: 'column',
  },
  m: {
    margin: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(1),
  },
}))

const BreakControl = ({ isActive, setTime, handleStart }) => {
  const [state] = useContext(Context)
  const { desktop, mobile, m, mr } = useBreakControlStyles()

  const isMobileScreen = window.innerWidth < 600 ? true : false
  const [applyResponsiveStyle, setApplyResponsiveStyle] = useState(isMobileScreen)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setApplyResponsiveStyle(true)
      else setApplyResponsiveStyle(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const handleBreak = (breakLengh, breakType) => {
    if (!isActive) {
      setTime(breakLengh)
      handleStart(breakType)
    }
  }

  return (
    <>
      <Toolbar variant='dense' className={applyResponsiveStyle ? mobile : desktop}>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(state.shortBreakLength, 'short break')}
          variant='contained'
          className={m}
        >
          <Icon className={mr}>local_cafe</Icon>
          Short Break
        </Button>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(state.longBreakLength, 'long break')}
          className={m}
          variant='contained'
        >
          <Icon className={mr}>self_improvement</Icon>
          Long Break
        </Button>
        <Button
          fullWidth={true}
          onClick={() => handleBreak(state.lunchBreakLength, 'lunch break')}
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
