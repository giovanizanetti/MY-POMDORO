import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SideBar from './SideBar'
import { useStyles } from './style'

const Navigation = () => {
  const { root, alignNavItems, logo, menuButton } = useStyles()
  const [isVisible, setIsVisible] = useState(false)

  const toggleSideBar = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setIsVisible(!isVisible)
  }

  return (
    <>
      <AppBar className={root} position='static'>
        <Toolbar variant='regular' className={alignNavItems}>
          <Typography className={logo} variant='h6' color='inherit'>
            My Pomodoro
          </Typography>
          <IconButton
            edge='end'
            className={menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleSideBar()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar isVisible={isVisible} toggleSideBar={toggleSideBar} />
    </>
  )
}

export default Navigation
