import { useState, useContext } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Context } from '../../StoreProvider/index'
import { SET_ALARM_SONG } from '../../types'
import { makeStyles } from '@material-ui/core/styles'
import songList from './songs'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const SelectSong = () => {
  const { formControl } = useStyles()

  const [state, dispatch] = useContext(Context)
  const [open, setOpen] = useState(false)

  return (
    <FormControl className={formControl}>
      <InputLabel id='demo-controlled-open-select-label'>
        Select a sound for the alarm
      </InputLabel>
      <Select
        labelId='demo-controlled-open-select-label'
        id='demo-controlled-open-select'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onChange={(e) =>
          dispatch({ type: SET_ALARM_SONG, payload: e.target.value })
        }
        value={state.alarmSong} // read global state to get this value
      >
        {songList.map((song) => (
          <MenuItem key={song.name} value={song.path}>
            {song.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectSong
