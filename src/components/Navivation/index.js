import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { useNavStyles } from './style'
import MenuIcon from '@material-ui/icons/Menu'
import SideBar from './SideBar'

const Navigation = () => {
  const { root, alignNavItems, logo, menuButton } = useNavStyles()

  const [isVisible, setIsVisible] = useState(false)
  const toggleSideBar = () => setIsVisible(!isVisible)

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
            onClick={() => toggleSideBar()}
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
