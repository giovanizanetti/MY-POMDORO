import { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { songList } from './songs'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const SelectSong = () => {
  const { formControl } = useStyles()
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
        // value={age}
        // onChange={handleChange}
        value={songList[1]}
      >
        {songList.map((song) => {
          console.log(Object.getOwnPropertyNames(song))
          return (
            <MenuItem key={song} value={song}>
              {song}
            </MenuItem>
          )
        })}
        {/* <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  )
}

export default SelectSong
