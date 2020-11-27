import { useState, useContext } from 'react'
import { Context } from '../../store'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Typography,
  Icon,
  IconButton,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const Settings = () => {
  const [state, dispatch] = useContext(Context)
  console.log(state)

  const [open, setOpen] = useState(false)
  const { modalHeader, button, formControl } = useStyles()

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={() => setOpen(false)}
        >
          <div className={modalHeader}>
            Settings
            <IconButton onClick={() => setOpen(false)}>
              <Icon>close</Icon>
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.gilad}
                    // onChange={handleChange}
                    name='Timer indication in title'
                  />
                }
                label='Timer indication in title'
              />
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.jason}
                    // onChange={handleChange}
                    name='Browser notifications'
                  />
                }
                label='Browser notifications'
              />
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.antoine}
                    // onChange={handleChange}
                    name='Alarm'
                  />
                }
                label='Alarm'
              />

              <FormControl className={formControl}>
                <InputLabel id='demo-controlled-open-select-label'>
                  Select a sound for the alarm
                </InputLabel>
                <Select
                  labelId='demo-controlled-open-select-label'
                  id='demo-controlled-open-select'
                  open={false}
                  // open={open}
                  // onClose={handleClose}
                  // onOpen={handleOpen}
                  // value={age}
                  // onChange={handleChange}
                  value='10'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)} color='primary'>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Settings
