import { makeStyles } from '@material-ui/core/styles';
import { darkenColor } from '@theme/theme';

export const useButtonStyles = makeStyles(
  (theme) => ({
    shadowButton: {
      boxShadow: 'inset 0 -4px 0 0 rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: 'inset 0 -4px 0 0 rgba(0,0,0,0.1)',
      },
      '&:active': {
        boxShadow: 'inset 0px 4px 0 0 rgba(0,0,0,0.05)',
      },
      '&:focus': {
        boxShadow: `inset 0 -4px 0 0 rgba(0,0,0,0.1), 0 0 0 0.1rem ${theme.palette.shadow?.grey}`,
      },
    },
    primaryLightButton: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: darkenColor(theme.palette.primary.light),
      },
    },
    secondaryLightButton: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: darkenColor(theme.palette.secondary.light),
      },
    },
  }),
  { index: 1 },
);
