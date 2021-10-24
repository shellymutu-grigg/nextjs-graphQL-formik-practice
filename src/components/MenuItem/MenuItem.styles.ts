import { makeStyles } from '@material-ui/core/styles';

export const useMenuItemStyles = makeStyles(() => ({
  menuItem: {
    padding: '0.25rem 1rem 0.25rem 0.75rem',
    '& .MuiListItem-root:hover': {
      backgroundColor: 'transparent',
    },
  },
}));
