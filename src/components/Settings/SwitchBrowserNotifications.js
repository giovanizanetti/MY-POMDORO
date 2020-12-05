import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_SEND_NOTIFICATIONS } from '../../types'
import { useContext } from 'react'

const SwitchBrowserNotifications = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.sendNotifications}
          onChange={() => dispatch({ type: SET_SEND_NOTIFICATIONS })}
          name='Browser notifications'
        />
      }
      label='Browser notifications'
    />
  )
}

export default SwitchBrowserNotifications
