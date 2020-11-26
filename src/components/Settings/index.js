import { useState } from 'react'
import {
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Typography,
} from '@material-ui/core'

const Settings = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        onClick={() => setOpenModal(true)}
      >
        Open dialog
      </Button>
      <Dialog
        onClose={() => setOpenModal(false)}
        aria-labelledby='customized-dialog-title'
        open={openModal}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={() => setOpenModal(false)}
        >
          Settingss
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpenModal(false)} color='primary'>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Settings
