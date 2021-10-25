import React, { FC } from 'react';
import type { ParsedUrlQuery, SharedPageProps } from '@interfaces/common-types';
import { Header } from '@components/Header/Header';
import { Container } from '@material-ui/core';
import { useValidationSectionStyles } from '@components/ValidationSection/ValidationSection.styles';
import Validation from './validation';

interface EmailVerificationProps extends SharedPageProps {
  query: ParsedUrlQuery;
  accessToken: string | null;
}

const ValidationPage: FC<EmailVerificationProps> = ({ accessToken }) => {
  const { headerShadow } = useValidationSectionStyles();

  return (
    <>
      <Header hideProfile className={headerShadow} />

      <Container disableGutters>
        <Validation accessToken={accessToken} />
      </Container>
    </>
  );
};

export default ValidationPage;
