import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_PLAY_SONG } from '../../types'
import { useContext } from 'react'

const SwitchPlayAlarmSong = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.playSong}
          onChange={() => dispatch({ type: SET_PLAY_SONG })}
          name='Alarm'
        />
      }
      label='Alarm Song'
    />
  )
}

export default SwitchPlayAlarmSong
