import { useState, useContext } from 'react'
import { Context } from '../../StoreProvider/index'
import SelectSong from './SelectSong'

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

import {
  SET_PLAY_SONG,
  SET_ALARM_SONG,
  SET_SEND_NOTIFICATIONS,
  SET_POMODORO_LENGTH,
  SET_SHORT_BREAK_LENGTH,
  SET_LONG_BREAK_LENGTH,
  SET_LUNCH_BREAK_LENGTH,
  SET_DISPLAY_BREAK_MENU,
  SET_POMODORO_COUNT,
  SET_POMODORO_DAILY_TARGET,
  SET_POMODORO_WEEKLY_TARGET,
  SET_DISPLAY_DOC_TITLE_TIMER,
  // SET_ERROR,
  SET_AUTOMATIC_BREAK,
  SET_AUTOMATIC_POMODORO,
} from '../../types'

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

  const [open, setOpen] = useState(false)
  // const [selectOpen, setSelectOpen] = useState(false)
  const { modalHeader, button, formControl } = useStyles()

  return (
    <div>
      {/* <Button variant='outlined' color='primary' onClick={() => setOpen(true)}>
        Open dialog
      </Button> */}
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
                    checked={state.displayDocTitleTimer}
                    onChange={() =>
                      dispatch({ type: SET_DISPLAY_DOC_TITLE_TIMER })
                    }
                    name='Timer indication on the browser title'
                  />
                }
                label='Timer indication on the browser title'
              />
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
              <FormControlLabel
                control={
                  <Switch
                    checked={state.playSong}
                    onChange={() => dispatch({ type: SET_PLAY_SONG })}
                    name='Alarm'
                  />
                }
                label='Alarm'
              />
              <SelectSong />
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
