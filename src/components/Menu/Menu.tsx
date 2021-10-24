import React from 'react';
import { Menu as MaterialUIMenu } from '@material-ui/core';
import { MenuItem } from '@components/MenuItem/MenuItem';
import { Nullable } from '@interfaces/page-queries';
import { useMenuStyles } from '@components/Menu/Menu.styles';

export interface MenuProps {
  open: boolean;
  variant: 'menu' | 'selectedMenu';
  menuItems?: { title: string; url: string; icon: string };
  autoFocus: boolean;
  anchorEl: Nullable<HTMLDivElement>;
  className?: Nullable<string>;
  getContentAnchorEl?: Nullable<Function>;
  anchorOrigin?: Nullable<Object>;
  transformOrigin?: Nullable<Object>;
  onClick: () => void;
}

export const Menu = ({
  open,
  autoFocus,
  variant,
  menuItems,
  anchorEl,
  onClick,
}: MenuProps): JSX.Element => {
  const { menuArrow } = useMenuStyles();
  return (
    <MaterialUIMenu
      className={menuArrow}
      variant={variant}
      autoFocus={autoFocus}
      anchorEl={anchorEl}
      open={open}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClick={onClick}
    >
      {Array.isArray(menuItems)
        ? menuItems.map((menuItem) => {
            return (
              <MenuItem
                key={menuItem?.title}
                icon={menuItem?.icon ?? null}
                title={menuItem?.title ?? ''}
                url={menuItem?.url ?? ''}
                onClick={onClick}
              />
            );
          })
        : null}
    </MaterialUIMenu>
  );
};
