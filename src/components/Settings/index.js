import { useState } from 'react'
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
  FormLabel,
  FormGroup,
  Switch,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

const Settings = () => {
  const [open, setOpen] = useState(false)
  const { modalHeader } = useStyles()

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
          className={useStyles.customizedButton}
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
