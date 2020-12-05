import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_AUTOMATIC_BREAK } from '../../types'
import { useContext } from 'react'

const SwitchDocTitleBrowser = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.automaticBreak}
          onChange={() => dispatch({ type: SET_AUTOMATIC_BREAK })}
          name='Automatic break'
        />
      }
      label='Automatic starts a new break when pomodoro is over'
    />
  )
}

export default SwitchDocTitleBrowser
