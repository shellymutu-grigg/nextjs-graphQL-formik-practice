import { makeStyles } from '@material-ui/core/styles';

export const useCardStyles = makeStyles(() => ({
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
    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
  },
  h2: {
    margin: '0 0 1rem 0',
    fontSize: '1.5rem',
  },
  p: {
    margin: 0,
    fontSize: '1.25rem',
    lineHeight: '1.5',
  },
}));
