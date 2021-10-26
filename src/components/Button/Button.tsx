import React from 'react';
import {
  Button as MaterialUIButton,
  CircularProgress,
  Icon,
} from '@material-ui/core';
import { Link } from '@components/Link/Link';
import Box from '@material-ui/core/Box';
import classnames from 'classnames';
import type { Nullable } from '@interfaces/page-queries';
import { useButtonStyles } from '@components/Button/Button.styles';
import { ButtonSize } from '@interfaces/common-types';

export interface ButtonProps {
  type?: 'button' | 'submit';
  /**
   * Supports font ligatures ONLY.
   *
   * @see https://material-ui.com/components/material-icons/ for list of icons
   * @see https://material-ui.com/components/icons/#icon-font-icons
   */
  href?: string | null | undefined;
  showShadow?: boolean | null | undefined;
  startIcon?: Nullable<string>;
  endIcon?: Nullable<string>;
  disabled?: boolean;
  hrefTarget?: Nullable<boolean>;
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  linkClassName?: string;
  loading?: boolean;
  spinnerSize?: number;
  size: ButtonSize | null | undefined | string;
  endIconStyle?: {};
  text?: string;
  fontWeight?: string;
  variant?: string;
}

export const Button = ({
  linkClassName,
  text,
  type = 'button',
  size,
  fontWeight = '400',
  variant,
  startIcon,
  endIcon,
  disabled,
  showShadow,
  href = '',
  hrefTarget,
  onClick,
  className,
  endIconStyle,
  loading = false,
  spinnerSize = 16,
}: ButtonProps): JSX.Element => {
  const { shadowButton, primaryLightButton, secondaryLightButton } =
    useButtonStyles();
  const CustomMuiButton = (
    <MaterialUIButton
      type={type}
      size={(size as ButtonSize) || 'medium'}
      variant="contained"
      /**
       * `color` prop can accept ONLY `primary`, `secondary`, `default`.
       *
       * However, we have to support more button variants as per the designs. so
       * we default the variant to `default` for all the other variants other than
       * `primary` and `secondary` and overwrite the styles as desired.
       */
      color={
        variant === 'primary' || variant === 'secondary' ? variant : 'default'
      }
      startIcon={startIcon && <Icon>{startIcon}</Icon>}
      endIcon={
        !loading ? (
          endIcon && <Icon style={endIconStyle}>{endIcon}</Icon>
        ) : (
          <CircularProgress color="inherit" size={spinnerSize} />
        )
      }
      disabled={loading || disabled}
      onClick={onClick}
      disableRipple
      disableElevation
      className={classnames(className, {
        [primaryLightButton]: variant === 'primaryLight',
        [secondaryLightButton]: variant === 'secondaryLight',
        [shadowButton]: showShadow,
      })}
    >
      <Box component="span" fontWeight={fontWeight}>
        {text}
      </Box>
    </MaterialUIButton>
  );

  return href && type !== 'submit' ? (
    <Link
      href={disabled ? '#' : href}
      target={hrefTarget ? '_self' : '_blank'}
      className={linkClassName}
      style={disabled ? { cursor: 'not-allowed' } : {}}
    >
      {CustomMuiButton}
    </Link>
  ) : (
    CustomMuiButton
  );
};
