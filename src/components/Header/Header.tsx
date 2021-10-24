import React, { useRef, useState } from 'react';
import { Container, AppBar, Toolbar, Grid } from '@material-ui/core';
import { Link } from '@components/Link/Link';
// import { CommonCMSData } from '@interfaces/page-queries';
import { Menu } from '../Menu/Menu';
import { useStyles } from './Header.styles';

export interface HeaderProps {
  className?: string;
  // pageData: CommonCMSData['pageData'];
  hideProfile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  // pageData,
  hideProfile,
  className = '',
}) => {
  const pageDetails = {
    header: {
      logoUrl: '',
      logoUrlTarget: '',
      logoImage: {
        url: '',
        title: '',
      },
      profileImageSelected: { url: '', width: '', height: '' },
      profileImageOutline: { url: '', width: '', height: '' },
      userMenu: {
        itemsCollection: { items: {} },
      },
    },
  };
  const anchorEl = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { menu } = useStyles();
  function handleClick(): void {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <AppBar position="relative" color="transparent" className={className}>
        <Container>
          <Toolbar disableGutters>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              spacing={0}
            >
              <Link
                href={pageDetails?.header?.logoUrl ?? '/'}
                target={pageDetails?.header?.logoUrlTarget ? '_self' : '_blank'}
              >
                <img
                  src={pageDetails?.header?.logoImage?.url ?? ''}
                  alt={pageDetails?.header?.logoImage?.title ?? ''}
                  width="38"
                  height="38"
                />
              </Link>
              {!hideProfile && (
                <div className={menu}>
                  <div ref={anchorEl}>
                    <img
                      title="profile"
                      src={
                        menuOpen
                          ? pageDetails?.header?.profileImageSelected?.url ?? ''
                          : pageDetails?.header?.profileImageOutline?.url ?? ''
                      }
                      alt="profile"
                      width={
                        menuOpen
                          ? pageDetails?.header?.profileImageSelected?.width ??
                            48
                          : pageDetails?.header?.profileImageOutline?.width ??
                            48
                      }
                      height={
                        menuOpen
                          ? pageDetails?.header?.profileImageSelected?.height ??
                            48
                          : pageDetails?.header?.profileImageOutline?.height ??
                            48
                      }
                      onClick={handleClick}
                    />
                  </div>
                  <Menu
                    open={menuOpen}
                    autoFocus={false}
                    variant="menu"
                    anchorEl={anchorEl.current}
                    onClick={handleClick}
                    menuItems={{ title: 'title', icon: 'icon', url: 'url' }}
                  />
                </div>
              )}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
