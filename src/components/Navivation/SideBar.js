import React from 'react'
import clsx from 'clsx'
import { useSideBarStyles } from './style'
import { useContext, useEffect } from 'react'
import { Context } from '../../StoreProvider/index'
import Settings from '../Settings'

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'

import { SET_OPEN_SETTINGS, SET_OPEN_LOGS } from '../../types'

export default function TemporaryDrawer({ toggleSideBar, isVisible }) {
  const [state, dispatch] = useContext(Context)
  const { list, fullList } = useSideBarStyles()

  useEffect(() => console.log('sideMenu'), [])

  const renderList = (anchor) => (
    <>
      <div
        className={clsx(list, {
          [fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role='presentation'
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
      </div>
      {state.openSettings && <Settings />}
    </>
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
