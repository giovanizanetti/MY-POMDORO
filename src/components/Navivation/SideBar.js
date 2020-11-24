import React from 'react'
import clsx from 'clsx'
import { useSideBarStyles } from './style'
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import Icon from '@material-ui/core/Icon'

export default function TemporaryDrawer({ toggleSideBar, isVisible }) {
  const { list, fullList } = useSideBarStyles()

  const renderList = (anchor) => (
    <div
      className={clsx(list, {
        [fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleSideBar()}
      onKeyDown={toggleSideBar()}
    >
      <List>
        <ListItem button>My Pomodoro App</ListItem>
      </List>

      <Divider />

      <List>
        {[
          { name: 'Settings', icon: 'settings' },
          { name: 'Log', icon: 'history' },
          { name: 'FAQ', icon: 'help_outline' },
        ].map((item) => (
          <ListItem button key={item.name}>
            <ListItemIcon childre=''>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      {
        <>
          <Drawer anchor='right' open={isVisible} onClose={toggleSideBar()}>
            {renderList('right')}
          </Drawer>
        </>
      }
    </div>
  )
}
