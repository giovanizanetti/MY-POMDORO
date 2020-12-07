import React, { useEffect, useState, useContext } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { useNavStyles } from './style'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'
import MenuItems from './MenuItems'
import Settings from '../Settings'
import { Context } from '../../StoreProvider/index'

const Navigation = () => {
  const { root, alignNavItems, logo, menuButton } = useNavStyles()
  const [isVisible, setIsVisible] = useState(false)
  const isMobileScreen = window.innerWidth < 600 ? true : false
  const [showHamburgerMenu, setShowHamburguerMenu] = useState(isMobileScreen)
  const [state, dispatch] = useContext(Context)

  const toggleSideDrawer = () => setIsVisible(!isVisible)

  //CANDITATE FOR ITS OWN HOOK
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setShowHamburguerMenu(true)
      else setShowHamburguerMenu(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <AppBar className={root} position='absolute'>
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
              onClick={() => toggleSideDrawer()}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <MenuItems displayDesktop={true} />
          )}
        </Toolbar>
      </AppBar>
      {isVisible && (
        <SideDrawer onClick={() => toggleSideDrawer()} isVisible={isVisible} toggleSideDrawer={toggleSideDrawer} />
      )}
      {state.openSettings && <Settings />}
    </>
  )
}

export default Navigation
