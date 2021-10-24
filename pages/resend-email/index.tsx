import React from 'react';
import { Header } from '@components/Header/Header';
import { Container } from '@material-ui/core';
import { useResendEmailStyles } from '../../src/components/resend-email.styles';
import ResendEmailSection from './resend-email-section';

function ResendEmail(): any {
  const { headerShadow } = useResendEmailStyles();

  return (
    <>
      <Header hideProfile className={headerShadow} />

      <Container disableGutters>
        <ResendEmailSection />
      </Container>
    </>
  );
}

export default ResendEmail;
