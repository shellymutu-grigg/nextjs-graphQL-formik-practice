import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { Container } from '@material-ui/core';
import { UpdateAddressPanel } from '@components/UpdateAddressPanel/UpdateAddressPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateAddressPage: FC = () => {
  return (
    <>
      <Header />
      <Container disableGutters>
        <UpdateAddressPanel buttonText="Back" />
      </Container>
    </>
  );
};

export default UpdateAddressPage;
