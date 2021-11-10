import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

interface ButtonProps {
  buttonText: string;
}

export const UpdateAddressPanel: FC<ButtonProps> = ({ buttonText }) => {
  return (
    <Button type="submit" variant="outline-info" href="/">
      {' '}
      {buttonText}{' '}
    </Button>
  );
};
