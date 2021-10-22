import { makeStyles } from '@material-ui/core/styles';

export const useCardStyles = makeStyles((theme) => ({
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '45%',
  },
  layout: {
    overflow: 'hidden',
    minWidth: '320px',
    height: '100%',

    '& .main-content': {
      position: 'absolute',
      top: '4.5rem',
      margin: '0 auto',
      width: '100%',
      left: '0',
      right: '0',
      padding: '1rem 1rem 6rem',
    },
  },

  boldHeader: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: '1.75rem',
  },

  marginBottomX1point5: {
    marginBottom: theme.spacing(1.5),
  },
}));
