import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { Container } from '@material-ui/core';
import { UpdateAddressPanel } from '@components/UpdateAddressPanel/UpdateAddressPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUpdateAddressPanelStyles } from '@components/UpdateAddressPanel/UpdateAddressPanel.styles';

const UpdateAddressPage: FC = () => {
  const { headerShadow } = useUpdateAddressPanelStyles();
  return (
    <>
      <Header hideProfile className={headerShadow} />
      <Container disableGutters>
        <UpdateAddressPanel buttonText="Back" />
      </Container>
    </>
  );
};

export default UpdateAddressPage;
