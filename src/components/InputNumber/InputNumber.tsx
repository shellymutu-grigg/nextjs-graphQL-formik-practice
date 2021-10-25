import {
  InputWrapper,
  InputWrapperProps,
} from '@components/InputWrapper/InputWrapper';
import { Input, InputAdornment, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { phoneNumberFormat } from '@utils/number-formatter';
import { useField } from 'formik';
import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

interface InputTextProps extends Omit<InputWrapperProps, 'children'> {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  format?: NumberFormatProps['format'];
  mask?: NumberFormatProps['mask'];
  phoneNumber?: boolean;
}

export const InputNumber: React.FC<InputTextProps> = ({
  Icon,
  format,
  mask,
  phoneNumber,
  ...rest
}) => {
  const [fieldInput] = useField(rest.name);

  return (
    <InputWrapper {...rest}>
      <NumberFormat
        customInput={Input}
        name={rest.name}
        id={rest.name}
        format={phoneNumber ? phoneNumberFormat(fieldInput.value) : format}
        mask={mask}
        type="tel"
        value={fieldInput.value}
        endAdornment={
          Icon && (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          )
        }
        onChange={fieldInput.onChange}
        onBlur={fieldInput.onBlur}
      />
    </InputWrapper>
  );
};
