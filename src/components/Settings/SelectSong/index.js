import { useState, useContext, useRef } from 'react'
import { usePlaySong } from '../../../hooks/usePlaySong'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Context } from '../../../StoreProvider/index'
import { SET_ALARM_SONG } from '../../../types'
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
  const [alarmSong, setAlarmSong] = useState(state.alarmSong)
  const audioRef = useRef()
  const [isSongPlaying, setIsSongPlaying] = usePlaySong([alarmSong, audioRef])

  return (
    <>
      <audio disableRemotePlayback={true} ref={audioRef} src={alarmSong} />
      <FormControl className={formControl}>
        <InputLabel id='select_song_label'>Select a sound for the alarm</InputLabel>
        <Select
          labelId='select_song_label'
          id='select_song'
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          onChange={(e) => dispatch({ type: SET_ALARM_SONG, payload: e.target.value })}
          value={state.alarmSong}
        >
          {songList.map((song) => (
            <MenuItem
              onMouseOver={() => {
                setAlarmSong(song.path)
                setIsSongPlaying(true)
              }}
              onMouseLeave={() => setIsSongPlaying(false)}
              onClick={() => setIsSongPlaying(false)}
              key={song.name}
              value={song.path}
            >
              {song.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default SelectSong
