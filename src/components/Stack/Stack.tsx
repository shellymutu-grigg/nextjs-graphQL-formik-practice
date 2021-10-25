import Box, { BoxProps } from '@material-ui/core/Box';
import React, { ReactNode } from 'react';

/**
 * This component adds gap between its children if children is an array of react elements,
 * the gap here is 1|2|3... as normal layout properties on BoxProps['margin'] from MUI
 * */
export const Stack: React.FC<
  {
    direction: 'row' | 'column';
    gap?: number;
  } & BoxProps
> = ({ gap = 1, direction, children, ...rest }) => {
  if (
    !children ||
    !Array.isArray(children) ||
    !children.length ||
    children.length === 1
  ) {
    return <Box {...rest}>{children}</Box>;
  }

  const newChildren: ReactNode[] = [];

  children.forEach((child, index) => {
    const isLast = index === children.length - 1;

    newChildren.push(child);

    if (!isLast) {
      newChildren.push(
        direction === 'row' ? (
          <Box key={index} marginLeft={gap} />
        ) : (
          <Box key={index} marginTop={gap} />
        ),
      );
    }
  });

  return <Box {...rest}>{newChildren}</Box>;
};
