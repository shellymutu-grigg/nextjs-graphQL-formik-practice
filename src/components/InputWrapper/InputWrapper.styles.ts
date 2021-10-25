import { makeStyles } from '@material-ui/core/styles';

export const useInputWrapperStyles = makeStyles((theme) => ({
  fieldSuccess: {
    '& .MuiInput-underline::after': {
      transform: 'scaleX(1)',
      borderBottomColor: theme.palette.success.main,
    },
  },
}));
