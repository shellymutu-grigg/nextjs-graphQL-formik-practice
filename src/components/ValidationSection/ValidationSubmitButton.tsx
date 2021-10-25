import { BottomButton } from '@components/BottomButton/BottomButton';
import { useFormikContext } from 'formik';
import React from 'react';
import { useValidationSectionStyles } from './ValidationSection.styles';

const isObjectEmpty = (obj: object) =>
  typeof obj === 'object' && Object.keys(obj).length === 0;

export const ValidationSubmitButton = ({
  disableButton,
}: {
  disableButton: boolean;
}) => {
  const styles = useValidationSectionStyles();
  const { isValid, ...rest } = useFormikContext();
  const isInital = isObjectEmpty(rest.touched);

  if (!isValid || isInital) {
    return null;
  }

  return (
    <BottomButton
      disableButton={disableButton}
      buttonText="Next"
      buttonCss={styles.bottomButton}
      containerCss={styles.bottomButtonContainer}
      buttonType="submit"
    />
  );
};
