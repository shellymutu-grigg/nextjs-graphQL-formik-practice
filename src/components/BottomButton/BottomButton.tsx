import React from 'react';
import { Button, ButtonProps } from '@components/Button/Button';
import Box from '@material-ui/core/Box';
import classNames from 'classnames';
import { useBottomButtonStyles } from './BottomButton.styles';

interface BottomButtonBoxProps {
  hideBottomButton?: boolean;
  buttonText: ButtonProps['text'];
  buttonOnClick?: ButtonProps['onClick'];
  buttonHref?: ButtonProps['href'];
  buttonHrefTarget?: boolean;
  buttonCss?: string;
  containerCss?: string;
  buttonType?: ButtonProps['type'];
  disableButton?: boolean;
  endIcon?: ButtonProps['endIcon'];
  loading?: ButtonProps['loading'];
}

/**
 * A button that displays as a normal button on desktop, but shows up at the
 * bottom of the screen when mobile/tablet resolution.
 *
 * NOTE: To make sure user can scroll through the content on the page, when this
 * button is rendered on the mobile/tablet views - the parent container needs to
 * have at least `6rem` bottom padding. See the styles from the references of
 * this component for more details.
 */
export const BottomButton: React.FC<BottomButtonBoxProps> = ({
  hideBottomButton,
  buttonText,
  buttonOnClick,
  buttonHref,
  buttonHrefTarget,
  buttonCss,
  buttonType,
  containerCss,
  disableButton,
  endIcon,
  loading,
}) => {
  const styles = useBottomButtonStyles();

  if (hideBottomButton) return null;

  return (
    <Box className={classNames(styles.bottomButtonBox, containerCss)}>
      <Button
        disabled={disableButton}
        href={buttonHref}
        hrefTarget={buttonHrefTarget}
        onClick={buttonOnClick}
        className={classNames(styles.bottomButton, buttonCss)}
        size="large"
        fontWeight="bold"
        variant="primary"
        showShadow
        type={buttonType}
        text={buttonText}
        endIcon={endIcon}
        loading={loading}
        endIconStyle={{
          fontSize: 14,
        }}
      />
    </Box>
  );
};
