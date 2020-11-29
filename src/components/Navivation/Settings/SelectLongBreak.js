import { useState, useContext } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Context } from '../../../StoreProvider/index'
import { SET_LONG_BREAK_LENGTH } from '../../../types'
import { makeStyles } from '@material-ui/core/styles'

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
      <InputLabel id='select-short-break-label'>
        Select the length for long breaks
      </InputLabel>
      <Select
        labelId='select-short-break-label'
        id='short-break'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onChange={(e) =>
          dispatch({ type: SET_LONG_BREAK_LENGTH, payload: e.target.value })
        }
        value={state.longBreakLength}
      >
        {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30].map((option) => (
          <MenuItem key={option} value={option * 60}>
            {`${option} minutes`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectSong
