import { useState, useContext } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Context } from '../../../StoreProvider/index'
import { SET_SHORT_BREAK_LENGTH } from '../../../types'
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
      <InputLabel id='select-short-break-label'></InputLabel>
      <Select
        labelId='select-short-break-label'
        id='short-break'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onChange={(e) =>
          dispatch({ type: SET_SHORT_BREAK_LENGTH, payload: e.target.value })
        }
        value={state.shortBreakLength}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
          <MenuItem key={option} value={option * 60}>
            {`${option} ${option === 1 ? 'minute' : 'minutes'}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectSong
