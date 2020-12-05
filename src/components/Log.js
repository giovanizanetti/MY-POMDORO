import { useContext } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Context } from '../StoreProvider'
import { SET_OPEN_LOGS } from '../types'

const columnsSchema = [
  { field: 'session', headerName: 'Session', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'startTime', headerName: 'Starting Time', width: 150 },
  { field: 'endTime', headerName: 'Ending Time', width: 1500 },
]

const Log = () => {
  const [state, dispatch] = useContext(Context)
  const data = localStorage.session && JSON.parse(localStorage.session)

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      onClose={() => dispatch({ type: SET_OPEN_LOGS })}
      aria-labelledby='max-width-dialog-title'
      open={state.openLogs}
    >
      <DialogTitle onClose={() => dispatch({ type: SET_OPEN_LOGS })}>Logs</DialogTitle>
      <DialogContent>
        <div style={{ height: 400, width: '100%' }}>
          {data ? (
            <DataGrid
              rows={data} //THIS DATA WILL COME FROM LOCAL STORE
              columns={columnsSchema}
              pageSize={5}
              checkboxSelection
            />
          ) : (
            <strong
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80%',
                fontSize: '2rem',
                color: 'red',
              }}
            >
              You have no logs yet!
            </strong>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Log
