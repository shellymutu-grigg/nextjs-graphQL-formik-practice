import { makeStyles } from '@material-ui/core/styles';

export const useMenuStyles = makeStyles((theme) => ({
  menuArrow: {
    '& .MuiPaper-root': {
      width: '13.5rem',
      overflow: 'inherit',

      '& .MuiList-root': {
        padding: 0,
      },

      /*
        Arrow that appears on menu is a customised transformed polygon in ::before 
        https://github.com/mui-org/material-ui/issues/18928
      */
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        top: '-21px',
        right: '-8px',
        width: '2rem',
        height: '2rem',
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        transform: 'translate(-50%, 50%) rotate(315deg)',
        clipPath:
          'polygon(10px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + -10px))',
        /*
         Rendering behaviour of arrow between 1152px ('lg' screen width) and 1270px is not as expected
         so the following two breakpoints are an attempt to resolve the odd display behaviour
        */
        [theme.breakpoints.between(1190, 1250)]: {
          right: '2rem',
        },
        [theme.breakpoints.up(1250)]: {
          right: '3.2rem',
        },
      },
    },
  },
}));
