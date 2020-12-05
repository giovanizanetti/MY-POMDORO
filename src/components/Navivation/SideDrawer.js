import React from 'react'
import MenuItems from './MenuItems'
import {
  Drawer,
  List,
  Divider,
  ListItem,
  Icon,
  IconButton,
} from '@material-ui/core'

const SideDrawer = ({ toggleSideDrawer, isVisible }) => {
  return (
    <div>
      {
        <>
          <Drawer
            anchor='right'
            open={isVisible}
            onClose={() => toggleSideDrawer()}
          >
            {/* <List onClose={() => toggleSideDrawer()}>
              <ListItem button>My Pomodoro App</ListItem>
            </List> */}
            <IconButton
              style={{ justifyContent: 'flex-end' }}
              onClick={() => toggleSideDrawer()}
            >
              <Icon style={{}}>close</Icon>
            </IconButton>

            <Divider />
            <MenuItems />
          </Drawer>
        </>
      }
    </div>
  )
}
export default SideDrawer
