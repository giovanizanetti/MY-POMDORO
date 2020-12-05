import { useContext, useEffect } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'
import { Context } from '../../StoreProvider/index'
import { SET_OPEN_SETTINGS, SET_OPEN_LOGS } from '../../types'

const MenuItems = () => {
  const [state, dispatch] = useContext(Context)

  return (
    <List>
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
        <ListItem button key={item.name} onClick={item.action}>
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  )
}

export default MenuItems
