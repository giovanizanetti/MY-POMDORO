import { makeStyles } from '@material-ui/core/styles'

export const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#d92626',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  alignNavItems: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: theme.spacing(2),
  },
}))

export const useSideBarStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})
