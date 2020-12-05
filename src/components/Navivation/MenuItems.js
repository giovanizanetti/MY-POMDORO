import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'
import { Context } from '../../StoreProvider/index'
import { SET_OPEN_SETTINGS, SET_OPEN_LOGS } from '../../types'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  icon: { minWidth: '35px' },
})

const MenuItems = ({ displayDesktop }) => {
  const [state, dispatch] = useContext(Context)
  const { list, icon } = useStyles()

  return (
    <List
      className={list}
      conmponent='ul'
      style={displayDesktop && { display: 'flex' }}
    >
      {[
        {
          name: 'Settings',
          icon: 'settings',
          action: () => dispatch({ type: SET_OPEN_SETTINGS }),
        },
        {
          name: 'Log',
          icon: 'history',
          action: () => dispatch({ type: SET_OPEN_LOGS }),
        },
        { name: 'FAQ', icon: 'help_outline' },
      ].map((item) => (
        <ListItem
          ContainerComponent='li'
          button
          key={item.name}
          onClick={item.action}
        >
          <ListItemIcon className={icon}>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          {!displayDesktop && <ListItemText primary={item.name} />}
        </ListItem>
      ))}
    </List>
  )
}

export default MenuItems
