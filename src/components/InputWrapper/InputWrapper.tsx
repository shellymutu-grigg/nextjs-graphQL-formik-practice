import React from 'react';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import { useField } from 'formik';
import classNames from 'classnames';
import { usePrevious } from '@utils/usePrevious';
import { useInputWrapperStyles } from './InputWrapper.styles';

export interface InputWrapperProps {
  containerCss?: string;
  label: string;
  name: string;
  placeHolder?: string;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  name,
  label,
  containerCss,
  children,
}) => {
  const { fieldSuccess } = useInputWrapperStyles();
  const [field, fieldMeta, { setTouched }] = useField(name);
  const isValidationError = fieldMeta.touched && !!fieldMeta.error;
  const isValidationSuccess = fieldMeta.touched && !fieldMeta.error;

  const prevValue = usePrevious(field.value);
  const isFieldValueChanged =
    prevValue !== undefined && field.value !== prevValue;

  React.useEffect(() => {
    if (isFieldValueChanged && !fieldMeta.touched) {
      // By default, Formik only set touched to true when onBlur
      // we change this to true when typing to trigger styling change,
      // because isValidationError depends on this
      setTouched(true);
    }
  }, [setTouched, fieldMeta.touched, isFieldValueChanged]);

  return (
    <FormControl
      fullWidth
      error={isValidationError}
      className={classNames(containerCss, {
        [fieldSuccess]: isValidationSuccess,
      })}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {children}
      {isValidationError && <FormHelperText>{fieldMeta.error}</FormHelperText>}
    </FormControl>
  );
};
