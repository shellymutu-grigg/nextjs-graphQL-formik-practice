import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ValidationSection } from '@components/ValidationSection/ValidationSection';
import { slugPaths } from '@utils/constants';
import { getDetailsFromAccessToken } from '@utils/session';
import { useResendEmailStyles } from '@components/ResendEmailSection/ResendEmailSection.styles';

interface ValidationProps {
  accessToken: string | null;
}

const useBackToHomeForUser = (accessToken: ValidationProps['accessToken']) => {
  const router = useRouter();

  useEffect(() => {
    const details = getDetailsFromAccessToken(accessToken);

    if (details !== null) {
      router.replace(slugPaths.HOME);
    }
  }, [accessToken, router]);
};

const Validation: React.FC<ValidationProps> = ({ accessToken }) => {
  useBackToHomeForUser(accessToken);
  const { layout } = useResendEmailStyles();
  return (
    <>
      <Grid container direction="column" className={layout}>
        <Grid
          component={Grid}
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
        >
          <ValidationSection />
        </Grid>
      </Grid>
    </>
  );
};
export default Validation;
