import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_AUTOMATIC_POMODORO } from '../../types'
import { useContext } from 'react'

const SwitchAutomaticPomodoro = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.automaticPomodoro}
          onChange={() => dispatch({ type: SET_AUTOMATIC_POMODORO })}
          name='Automatic pomodoro'
        />
      }
      label='Automatic starts new pomodoro when break is over'
    />
  )
}

export default SwitchAutomaticPomodoro
