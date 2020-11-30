import { useState, useContext } from 'react'
import { Context } from '../../StoreProvider'
import SelectSong from './SelectSong'
import SelectShortBreak from './SelectShortBreak'
import SelectLongBreak from './SelectLongBreak'
import SelectLunchBreak from './SelectLunchBreak'
import SelectPomodoroLength from './SelectPomodoroLength'

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
  SET_SEND_NOTIFICATIONS,
  SET_DISPLAY_DOC_TITLE_TIMER,
  SET_OPEN_SETTINGS,
  SET_AUTOMATIC_BREAK,
  SET_AUTOMATIC_POMODORO,
  SET_DISPLAY_BREAK_MENU,
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

  const { modalHeader, button, formControl } = useStyles()

  return (
    <div>
      <Dialog
        onClose={() => dispatch({ type: SET_OPEN_SETTINGS })}
        aria-labelledby='customized-dialog-title'
        open={state.openSettings}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={() => dispatch({ type: SET_OPEN_SETTINGS })}
        >
          <div className={modalHeader}>
            Settings
            <IconButton onClick={() => dispatch({ type: SET_OPEN_SETTINGS })}>
              <Icon>close</Icon>
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom>Settings</Typography> */}
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
                label='Alarm Song'
              />
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
              <FormControlLabel
                control={
                  <Switch
                    checked={state.automaticPomodoro}
                    onChange={() => dispatch({ type: SET_AUTOMATIC_POMODORO })}
                    name='Automatic break'
                  />
                }
                label='Automatic starts new pomodoro when break is over'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={state.displayBreakMenu}
                    onChange={() => dispatch({ type: SET_DISPLAY_BREAK_MENU })}
                    name='Automatic break'
                  />
                }
                label='Enable breaks menu'
              />
              <SelectSong />
              <SelectShortBreak />
              <SelectLongBreak />
              <SelectLunchBreak />
              <SelectPomodoroLength />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => dispatch({ type: SET_OPEN_SETTINGS })}
            color='primary'
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Settings
