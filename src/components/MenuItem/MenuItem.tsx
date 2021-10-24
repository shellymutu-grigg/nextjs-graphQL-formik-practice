import React, { RefObject } from 'react';
import {
  MenuItem as MaterialUIMenuItem,
  ListItemText,
  ListItem,
  ListItemProps,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useMenuItemStyles } from '@components/MenuItem/MenuItem.styles';

export interface MenuItemProps {
  onClick: () => void;
  icon?: string;
  title?: string;
  url?: string;
}

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem disableGutters button component="a" {...props} />;
}

export const MenuItem = React.forwardRef(
  (
    { icon, title, url, onClick }: MenuItemProps,
    ref: RefObject<HTMLLIElement>,
  ): JSX.Element => {
    const { menuItem } = useMenuItemStyles();
    console.log('icon:', icon);
    return (
      <MaterialUIMenuItem ref={ref} className={menuItem} onClick={onClick}>
        <ListItemLink href={url ?? ''}>
          <img src={url ?? ''} alt={title ?? ''} height="32px" width="32px" />
          <ListItemText
            disableTypography
            primary={
              <Box pl="0.75rem" fontSize={16} letterSpacing={0}>
                {title}
              </Box>
            }
          />
        </ListItemLink>
      </MaterialUIMenuItem>
    );
  },
);
