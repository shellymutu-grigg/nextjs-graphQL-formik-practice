import {
  InputWrapper,
  InputWrapperProps,
} from '@components/InputWrapper/InputWrapper';
import { Input, InputAdornment, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { useField } from 'formik';
import React from 'react';

interface InputTextProps extends Omit<InputWrapperProps, 'children'> {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const InputText: React.FC<InputTextProps> = ({ Icon, ...rest }) => {
  const [fieldInput] = useField(rest.name);

  return (
    <InputWrapper {...rest}>
      <Input
        id={rest.name}
        {...fieldInput}
        endAdornment={
          Icon && (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          )
        }
      />
    </InputWrapper>
  );
};
