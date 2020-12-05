import { DialogActions, Button } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_OPEN_SETTINGS } from '../../types'
import { useContext } from 'react'

const SwitchBreakMenu = () => {
  const [state, dispatch] = useContext(Context)
  return (
    <DialogActions>
      <Button
        autoFocus
        onClick={() => dispatch({ type: SET_OPEN_SETTINGS })}
        color='primary'
      >
        Save changes
      </Button>
    </DialogActions>
  )
}

export default SwitchBreakMenu
