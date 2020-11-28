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
  Icon,
} from '@material-ui/core'

export default function TemporaryDrawer({ toggleSideBar, isVisible }) {
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
          { name: 'Settings', icon: 'settings' },
          { name: 'Log', icon: 'history' },
          { name: 'FAQ', icon: 'help_outline' },
        ].map((item) => (
          <ListItem
            id={item.name}
            onClick={(id) => console.log(id)}
            button
            key={item.name}
            value={item.name}
          >
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
