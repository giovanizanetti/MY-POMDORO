import React from 'react'
import MenuItems from './MenuItems'
import { Drawer, Divider, Icon, IconButton } from '@material-ui/core'

const SideDrawer = ({ toggleSideDrawer, isVisible }) => {
  return (
    <Drawer anchor='right' open={isVisible} onClose={() => toggleSideDrawer()}>
      <IconButton
        style={{ justifyContent: 'flex-end' }}
        onClick={() => toggleSideDrawer()}
      >
        <Icon style={{}}>close</Icon>
      </IconButton>

      <Divider />
      <MenuItems />
    </Drawer>
  )
}
export default SideDrawer
