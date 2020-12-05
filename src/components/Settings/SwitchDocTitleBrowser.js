import { FormControlLabel, Switch } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_DISPLAY_DOC_TITLE_TIMER } from '../../types'
import { useContext } from 'react'

const SwitchDocTitleBrowser = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.displayDocTitleTimer}
          onChange={() => dispatch({ type: SET_DISPLAY_DOC_TITLE_TIMER })}
          name='Timer indication on the browser title'
        />
      }
      label='Timer indication on the browser title'
    />
  )
}

export default SwitchDocTitleBrowser
