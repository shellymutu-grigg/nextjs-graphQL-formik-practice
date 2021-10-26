import Grid from '@material-ui/core/Grid';
import PersonOutline from '@material-ui/icons/PersonOutline';
import React from 'react';
import { Formik, Form } from 'formik';
import { Stack } from '@components/Stack/Stack';
import { Link } from '@components/Link/Link';
import { InputText } from '@components/InputText/InputText';
import { InputNumber } from '@components/InputNumber/InputNumber';
import { InputDoB } from '@components/InputDoB/InputDoB';
import { CakeOutlined, PhoneAndroid } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { errors, messages, slugPaths } from '@utils/constants';
import { useModal } from '@components/Modal/Modal.helpers';
import { Modal } from '@components/Modal/Modal';
import { verifyMember } from '@services/client/authorization.client';
import { ValidationSubmitButton } from './ValidationSubmitButton';
import { useValidationSectionStyles } from './ValidationSection.styles';
import { validationSchema } from './ValidationSection.schema';

export const ValidationSection: React.FC = () => {
  const router = useRouter();
  const { isOpen, closeModal, openModal } = useModal();
  const styles = useValidationSectionStyles();
  const mutation = useMutation({
    mutationFn: verifyMember,
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          phone: '',
        }}
        onSubmit={async (values: any) => {
          mutation.mutate(values, {
            onSuccess: () => router.replace(slugPaths.HOME),
            onError: openModal,
          });
        }}
      >
        <Form className={styles.container}>
          <Grid xs={12} md={8} lg={6} item className={styles.padding}>
            <Typography variant="body1" gutterBottom align="left">
              {messages.ENTER_DETAILS_PART_ONE}
              {messages.NEXT_CTA_TEXT}
              {messages.ENTER_DETAILS_PART_TWO}
            </Typography>
            <Stack direction="column" gap={3}>
              <InputText
                label={messages.FIRST_NAME}
                name="firstName"
                Icon={PersonOutline}
              />
              <InputText
                label={messages.LAST_NAME}
                name="lastName"
                Icon={PersonOutline}
              />
              <InputDoB
                label="Date of birth"
                name="dateOfBirth"
                Icon={CakeOutlined}
              />
              <InputNumber
                label={messages.PHONE_NUMBER}
                name="phone"
                Icon={PhoneAndroid}
                phoneNumber
              />
            </Stack>
          </Grid>
          <ValidationSubmitButton disableButton={mutation.isLoading} />
        </Form>
      </Formik>
      <Modal
        className={styles.validationModal}
        isOpen={isOpen}
        closeModal={closeModal}
        title={errors.NO_MATCHING_DETAILS}
      >
        {errors.CORRECTLY_ENTER_DETAILS}
        <br />
        <br />
        {errors.CONTINUED_ERROR_PART_1}{' '}
        <Link href={`tel:${messages.PHONE_NUMBER_TEL_LINK}`}>
          {messages.PHONE_NUMBER_HELP}
        </Link>{' '}
        {messages.MESSAGE_TEXT_THREE}
      </Modal>
    </>
  );
};
