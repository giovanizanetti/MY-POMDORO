import { DialogTitle, IconButton, Icon } from '@material-ui/core'
import { Context } from '../../StoreProvider'
import { SET_OPEN_SETTINGS } from '../../types'
import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

const SettingsHeader = () => {
  const { modalHeader } = useStyles()

  const [state, dispatch] = useContext(Context)
  return (
    <DialogTitle id='customized-dialog-title'>
      <div className={modalHeader}>
        Settings
        <IconButton onClick={() => dispatch({ type: SET_OPEN_SETTINGS })}>
          <Icon>close</Icon>
        </IconButton>
      </div>
    </DialogTitle>
  )
}

export default SettingsHeader
