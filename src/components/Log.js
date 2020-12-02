import { useEffect, useState, useContext } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Context } from '../StoreProvider'
import { SET_OPEN_LOGS } from '../types'

export const useStyles = makeStyles((theme) => ({}))

const columnsSchema = [
  { field: 'session', headerName: 'Session', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'startTime', headerName: 'Starting Time', width: 150 },
  { field: 'endTime', headerName: 'Ending Time', width: 1500 },

  // {
  //   field: 'number',
  //   headerName: 'Number',
  //   width: 90,
  // },
]

const Log = () => {
  const [state, dispatch] = useContext(Context)
  const data = localStorage.session
    ? JSON.parse(localStorage.session)
    : undefined
  useEffect(() => {
    console.log(data)
  }, [data])

  // console.log(new Date().toLocaleTimeString('en-GB'))

  // new Date().toLocaleDateString('en-GB')

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      onClose={() => dispatch({ type: SET_OPEN_LOGS })}
      aria-labelledby='max-width-dialog-title'
      open={state.openLogs}
    >
      <DialogTitle onClose={() => dispatch({ type: SET_OPEN_LOGS })}>
        Logs
      </DialogTitle>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data} //THIS DATA WILL COME FROM LOCAL STORE
          columns={columnsSchema}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Dialog>
  )
}

export default Log
