import { useContext } from 'react'
import { Context } from '../../StoreProvider'
import SelectSong from './SelectSong'
import SelectShortBreak from './SelectShortBreak'
import SelectLongBreak from './SelectLongBreak'
import SelectLunchBreak from './SelectLunchBreak'
import SelectPomodoroLength from './SelectPomodoroLength'
import SwitchDocTitleBrowser from './SwitchDocTitleBrowser'
import SwitchBrowserNotifications from './SwitchBrowserNotifications'
import SwitchAutomaticBreak from './SwitchAutomaticBreak'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Icon,
  IconButton,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
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
}))

const Settings = () => {
  const [state, dispatch] = useContext(Context)

  const { modalHeader } = useStyles()

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
          <FormControl component='fieldset'>
            <FormGroup>
              <SwitchDocTitleBrowser />
              <SwitchBrowserNotifications />
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
              <SwitchAutomaticBreak />

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
