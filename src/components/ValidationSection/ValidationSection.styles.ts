import { makeStyles } from '@material-ui/core/styles';

export const useValidationSectionStyles = makeStyles((theme) => ({
  bottomButton: {
    marginLeft: 0,
  },
  bottomButtonContainer: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      padding: 0,
    },
  },
  validationModal: {
    maxWidth: '37.5rem',
    fontSize: '1rem',
    padding: '1rem 2.5rem',
  },
  padding: {
    padding: '2rem 1rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '1rem',
    },
  },
  link: {
    fontSize: '0.75rem',
  },
  headerShadow: {
    boxShadow: '0 4px 4px 0 rgba(12,0,51,0.1)',
  },
}));
