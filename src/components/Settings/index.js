import { useState } from 'react'
import { Modal } from '@material-ui/core'

const Settings = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div>HI I am a MOdal</div>
      </Modal>
      <button onClick={() => setOpenModal(true)}></button>
    </>
  )
}

export default Settings
