import React, { useEffect, useState, useContext } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { useNavStyles } from './style'
import MenuIcon from '@material-ui/icons/Menu'
import SideBar from './SideBar'
import MenuItems from './MenuItems'
import Settings from '../Settings'
import { Context } from '../../StoreProvider/index'

const Navigation = () => {
  const { root, alignNavItems, logo, menuButton } = useNavStyles()
  const [isVisible, setIsVisible] = useState(false)
  const [showHamburgerMenu, setShowHamburguerMenu] = useState(true)
  const [state, dispatch] = useContext(Context)

  const toggleSideBar = () => setIsVisible(!isVisible)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setShowHamburguerMenu(true)
      else setShowHamburguerMenu(false)
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <AppBar className={root} position='static'>
        <Toolbar variant='regular' className={alignNavItems}>
          <Typography className={logo} variant='h6' color='inherit'>
            My Pomodoro
          </Typography>
          {showHamburgerMenu ? (
            <IconButton
              edge='end'
              className={menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => toggleSideBar()}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <MenuItems />
          )}
        </Toolbar>
      </AppBar>
      {isVisible && (
        <SideBar
          onClick={() => toggleSideBar()}
          isVisible={isVisible}
          toggleSideBar={toggleSideBar}
        />
      )}
      {state.openSettings && <Settings />}
    </>
  )
}

export default Navigation
