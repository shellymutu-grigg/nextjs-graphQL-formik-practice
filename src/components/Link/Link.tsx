import React from 'react';
import NextLink from 'next/link';
import { Link as MuiLink, BoxProps } from '@material-ui/core';

interface TextProps extends BoxProps {
  className?: string;
  href: string;
  children: React.ReactNode | string;
  target?: string;
  style?: object;
}

export const Link: React.FC<TextProps> = ({
  children,
  href,
  target,
  className,
  style,
}) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink target={target} className={className} style={style}>
        {children}
      </MuiLink>
    </NextLink>
  );
};
