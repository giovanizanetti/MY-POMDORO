import React from 'react'
import clsx from 'clsx'
import { useSideBarStyles } from './style'
import { useState, useContext } from 'react'
import { Context } from '../../StoreProvider/index'

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'

import { SET_OPEN_SETTINGS } from '../../types'

export default function TemporaryDrawer({ toggleSideBar, isVisible }) {
  const [state, dispatch] = useContext(Context)
  console.log(state.openSettings)
  const { list, fullList } = useSideBarStyles()

  const renderList = (anchor) => (
    <div
      className={clsx(list, {
        [fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      // onClick={(e) => console.log(e.target.key)}
      // onKeyDown={(e) => console.log(e.target.value)}
    >
      <List>
        <ListItem button>My Pomodoro App</ListItem>
      </List>

      <Divider />

      <List>
        {[
          {
            name: 'Settings',
            icon: 'settings',
            action: () => dispatch({ type: SET_OPEN_SETTINGS }),
          },
          { name: 'Log', icon: 'history' },
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
    </div>
  )

  return (
    <div>
      {
        <>
          <Drawer
            anchor='right'
            open={isVisible}
            onClose={() => toggleSideBar()}
          >
            {renderList('right')}
          </Drawer>
        </>
      }
    </div>
  )
}
