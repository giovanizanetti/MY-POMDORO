import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_DISPLAY_BREAK_MENU } from '../../types'
import { useContext } from 'react'

const SwitchBreakMenu = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.displayBreakMenu}
          onChange={() => dispatch({ type: SET_DISPLAY_BREAK_MENU })}
          name='Enable break menu'
        />
      }
      label='Enable breaks menu'
    />
  )
}

export default SwitchBreakMenu
