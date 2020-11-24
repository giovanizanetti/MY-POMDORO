import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#d92626',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  alignItems: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: theme.spacing(2),
  },
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    // <div className={classes.root}>
    <AppBar className={classes.root} position='static'>
      <Toolbar variant='regular' className={classes.alignItems}>
        <Typography className={classes.logo} variant='h6' color='inherit'>
          My Pomodoro
        </Typography>
        <IconButton
          edge='end'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    // </div>
  )
}

export default Navigation
