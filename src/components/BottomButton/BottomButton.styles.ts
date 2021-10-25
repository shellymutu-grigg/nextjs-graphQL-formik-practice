import { makeStyles } from '@material-ui/core/styles';

export const useBottomButtonStyles = makeStyles((theme) => ({
  bottomButtonBox: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1rem',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    backgroundColor: theme.palette.background.default,
    boxShadow:
      'inset -1px 0 0 0 rgba(51,46,0,0.08), inset 1px 0 0 0 rgba(51,46,0,0.08), 0 -4px 0 0 rgba(51,46,0,0.1)',

    [theme.breakpoints.up('md')]: {
      position: 'static',
      border: 'unset',
      borderTopLeftRadius: 'unset',
      borderTopRightRadius: 'unset',
      boxShadow: 'unset',
    },
  },
  bottomButton: {
    width: '100%',
    '& .MuiButton-endIcon': {
      display: 'none',
    },

    [theme.breakpoints.up('md')]: {
      width: 'auto',
      '& .MuiButton-endIcon': {
        display: 'flex',
      },
    },
  },
}));
