import {
  InputWrapper,
  InputWrapperProps,
} from '@components/InputWrapper/InputWrapper';
import { Input, InputAdornment, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { useField } from 'formik';
import React from 'react';
import NumberFormat from 'react-number-format';

interface InputDoBProps extends Omit<InputWrapperProps, 'children'> {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const InputDoB: React.FC<InputDoBProps> = ({ Icon, ...rest }) => {
  const [fieldInput] = useField(rest.name);

  return (
    <InputWrapper {...rest}>
      <NumberFormat
        customInput={Input}
        name={rest.name}
        id={rest.name}
        format="##/##/####"
        mask={['d', 'd', 'm', 'm', 'y', 'y', 'y', 'y']}
        placeholder="dd/mm/yyyy"
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
