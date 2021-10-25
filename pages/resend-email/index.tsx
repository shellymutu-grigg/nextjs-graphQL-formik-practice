import React from 'react';
import { Header } from '@components/Header/Header';
import { Container } from '@material-ui/core';
import { useResendEmailStyles } from '../../src/components/ResendEmail/ResendEmailSection.styles';
import ResendEmailLayout from './resend-email';

function ResendEmail(): any {
  const { headerShadow } = useResendEmailStyles();

  return (
    <>
      <Header hideProfile className={headerShadow} />

      <Container disableGutters>
        <ResendEmailLayout />
      </Container>
    </>
  );
}

export default ResendEmail;
