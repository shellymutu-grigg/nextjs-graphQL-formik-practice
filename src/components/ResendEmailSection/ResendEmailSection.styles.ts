import { makeStyles } from '@material-ui/core/styles';

export const useResendEmailStyles = makeStyles((theme) => ({
  headerShadow: {
    boxShadow: '0 4px 4px 0 rgba(12,0,51,0.1)',
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
    paddingTop: '2rem',
  },
  bottomMargin1point5: {
    marginBottom: theme.spacing(1.5),
  },
  padding: {
    paddingTop: '2rem',
  },
}));
