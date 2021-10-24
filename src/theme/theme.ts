import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { darken } from 'polished';

/*
 * This is required to make typescript happy about the custom colors we have
 * added to the palette below.
 * *@see* https://stackoverflow.com/a/63619422/2791678
 * *@see* https://material-ui.com/customization/palette/#adding-new-colors
 */

declare module '@material-ui/core/styles/createPalette' {
  export interface Palette {
    shadow: { grey: string; secondaryGrey: string };
    link: string;
    greyBackground: string;
    orangeBackground: string;
    blackBackground: string;
    shallowYellowBackground: string;
    errorBackground: string;
    pageButtonBorderBottom: string;
    whiteFont: string;
    helpBackground: string;
    borderBottomColour: string;
    borderBottomHoverColour: string;
    borderBottomErrorColour: string;
  }

  export interface PaletteOptions {
    shadow: { grey: string; secondaryGrey: string };
    link: string;
    greyBackground: string;
    orangeBackground: string;
    blackBackground: string;
    shallowYellowBackground: string;
    errorBackground: string;
    pageButtonBorderBottom: string;
    whiteFont: string;
    helpBackground: string;
    borderBottomColour: string;
    borderBottomHoverColour: string;
    borderBottomErrorColour: string;
  }
}

/**
 * Darken color by 4%.
 *
 * *@param* color color to be darkened
 * *@returns* 4% darkened color
 */

export const darkenColor = (color: string): string => darken(0.04, color);

const palette = {
  primary: {
    main: '#ffd400',
    light: 'rgba(255,255,255,0.5)',
    dark: darkenColor('#ffd400'),
  },

  secondary: {
    main: '#0071eb',
    light: 'rgba(0,113,235,0.08)',
    dark: darkenColor('#0071eb'),
  },

  error: { main: '#ee6363' },
  success: { main: '#39d3ab' },
  shadow: { grey: '#d6d6d6', secondaryGrey: '#EAEAE4' },

  text: {
    primary: 'rgba(0,0,0,0.75)',
    secondary: '#B9B8B6',
    disabled: 'rgba(0,0,0,0.25)',
  },

  background: {
    default: '#ffffff',
  },

  greyBackground: '#F9F8F6',
  orangeBackground: '#F3731E',
  blackBackground: '#000000',
  shallowYellowBackground: '#FFE56A',
  errorBackground: '#ffe97f',
  pageButtonBorderBottom: '#E5BE01',
  divider: '#F9F8F6',
  link: '#0071eb',
  action: { selected: '#ffd400', hoverOpacity: 0.04 },
  whiteFont: '#ffffff',
  helpBackground: '#FEE981',
  borderBottomColour: '#EBEBEB',
  borderBottomHoverColour: '#949494',
  borderBottomErrorColour: '#CF3930',
};

const typography = {
  fontFamily: ['Open Sans', 'Material Icons', 'sans-serif'].join(','),
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1152,
    xl: 1920,
  },
};

const globalTheme = createTheme({
  palette,
  breakpoints,
  typography,
});

const overrides: Overrides = {
  MuiAppBar: {
    root: {
      boxShadow: 'none',

      [globalTheme.breakpoints.up('md')]: {
        boxShadow: '0 4px 4px 0 rgba(12,0,51,0.1)',
      },
    },
  },

  MuiContainer: {
    root: {
      [globalTheme.breakpoints.up('xs')]: {
        padding: '0 1rem',
      },
    },
  },

  MuiTab: {
    root: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      textTransform: 'capitalize',

      '&.Mui-selected': {
        fontWeight: 'bold',
        boxShadow: `inset 0 -4px 0 0 ${globalTheme.palette.primary.main}`,
      },
    },

    wrapper: {
      letterSpacing: 0,
    },
  },

  MuiTabs: {
    root: {
      padding: '0 1rem',
      borderRadius: '1.5rem 1.5rem 0 0',
      backgroundColor: globalTheme.palette.background.default,
      position: 'sticky',
      zIndex: 1,
      top: 0,
      boxShadow:
        'inset -1px 0 0 0 rgba(51,46,0,0.08), inset 1px 0 0 0 rgba(51,46,0,0.08), 0 -4px 0 0 rgba(51,46,0,0.1)',
    },

    indicator: {
      display: 'none',
    },
  },

  MuiTableCell: {
    root: {
      borderBottom: 0,
    },
  },

  MuiButton: {
    root: {
      lineHeight: 1.25,
      textTransform: 'none',
      letterSpacing: 0,
      borderRadius: '2rem',
      fontSize: '0.875rem',
    },

    sizeSmall: {
      padding: '0.25rem 0.5rem',
      fontSize: globalTheme.typography.pxToRem(12),
    },

    sizeLarge: {
      fontSize: '1rem',
      padding: '0.875rem 1.375rem',
    },

    iconSizeSmall: {
      '& > :first-child': {
        fontSize: '1rem',
      },
    },

    endIcon: {
      '&.MuiButton-iconSizeSmall': {
        marginLeft: '0.375rem',
      },
    },

    iconSizeMedium: {
      '& > :first-child': {
        fontSize: '1rem',
      },
    },

    contained: {
      color: globalTheme.palette.secondary.main,
      backgroundColor: globalTheme.palette.background.default,
      boxShadow: 'none',

      '&:hover': {
        backgroundColor: darkenColor(globalTheme.palette.background.default),
      },
    },
  },

  MuiLink: {
    root: {
      color: globalTheme.palette.link,
      whiteSpace: 'nowrap',
      fontWeight: 600,
      lineHeight: 1.5,

      '&[href^="tel:"], &[href^="mailto:"]': {
        fontWeight: 'bold',
      },

      '&.linkRegular': {
        fontWeight: 'normal',
      },

      '&:hover': {
        textDecoration: 'none!important',
      },
    },
  },

  MuiInputLabel: {
    root: {
      '&$focused': {
        fontWeight: 'bold',
        color: palette.text.primary,
      },

      '&$error': {
        color: palette.text.primary,
      },
    },

    shrink: {
      fontWeight: 'bold',
      color: palette.text.primary,
    },
  },

  MuiFormLabel: {
    root: {
      color: 'rgba(0,0,0,0.54)',
    },
  },

  MuiFormHelperText: {
    root: {
      letterSpacing: 0,
    },
  },

  MuiInputBase: {
    input: {
      '&:-webkit-autofill': {
        WebkitBackgroundClip: 'text',
      },
    },
  },

  MuiDialog: {
    paper: {
      margin: '1.5rem',
      '& .MuiIconButton-root': {
        padding: '0.5rem',
      },
    },
  },

  MuiDialogTitle: {
    root: {
      padding: 0,
    },
  },

  MuiDialogContent: {
    root: {
      padding: '1.25rem 1.25rem 2rem',
    },
  },

  MuiTypography: {
    body2: {
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.5rem',
    },
  },
};

const theme = createTheme(
  {
    overrides,
  },
  globalTheme,
);

export default responsiveFontSizes(theme);
