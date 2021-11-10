import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { useUpdateAddressPanelStyles } from './UpdateAddressPanel.styles';

interface ButtonProps {
  buttonText: string;
}

export const UpdateAddressPanel: FC<ButtonProps> = ({ buttonText }) => {
  const { padding } = useUpdateAddressPanelStyles();
  return (
    <div className={padding}>
      <Button type="submit" variant="outline-info" href="/">
        {' '}
        {buttonText}{' '}
      </Button>
    </div>
  );
};
