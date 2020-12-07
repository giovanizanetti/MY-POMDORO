import { useContext } from 'react'
import { Context } from '../../StoreProvider'
import { SET_OPEN_SETTINGS } from '../../types'
import { Dialog, DialogContent, FormControl, FormGroup } from '@material-ui/core'
import SettingsHeader from './SettingsHeader'
import SelectSong from './SelectSong'
import SelectShortBreak from './SelectShortBreak'
import SelectLongBreak from './SelectLongBreak'
import SelectLunchBreak from './SelectLunchBreak'
import SelectPomodoroLength from './SelectPomodoroLength'
import SwitchDocTitleBrowser from './SwitchDocTitleBrowser'
import SwitchBrowserNotifications from './SwitchBrowserNotifications'
import SwitchAutomaticBreak from './SwitchAutomaticBreak'
import SwitchPlayAlarmSong from './SwitchPlayAlarmSong'
import SwitchAutomaticPomodoro from './SwitchAutomaticPomodoro'
import SwitchBreakMenu from './SwitchBreakMenu'
import SettingsFooter from './SettingsFooter'

const Settings = () => {
  const [state, dispatch] = useContext(Context)

  return (
    <Dialog
      //  MODIFY THIS ACTION TO CLOSE ALL MODENS TO IMPROVE UX
      onClose={() => dispatch({ type: SET_OPEN_SETTINGS })}
      aria-labelledby='customized-dialog-title'
      open={state.openSettings}
    >
      <SettingsHeader />
      <DialogContent dividers>
        <FormControl component='fieldset'>
          <FormGroup>
            <SwitchDocTitleBrowser />
            <SwitchBrowserNotifications />
            <SwitchPlayAlarmSong />
            <SwitchAutomaticBreak />
            <SwitchAutomaticPomodoro />
            <SwitchBreakMenu />
            <SelectSong />
            <SelectShortBreak />
            <SelectLongBreak />
            <SelectLunchBreak />
            <SelectPomodoroLength />
          </FormGroup>
        </FormControl>
      </DialogContent>
      <SettingsFooter />
    </Dialog>
  )
}

export default Settings
