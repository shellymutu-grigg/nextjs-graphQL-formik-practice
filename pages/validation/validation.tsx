import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ValidationSection } from '@components/ValidationSection/ValidationSection';
import { slugPaths } from '@utils/constants';
import { getMembershipFromAccessToken } from '@utils/session';
import { useResendEmailStyles } from '@components/ResendEmailSection/ResendEmailSection.styles';

interface ValidationProps {
  accessToken: string | null;
}

const useBackToMyMembershipForUserWithMembership = (
  accessToken: ValidationProps['accessToken'],
) => {
  const router = useRouter();

  useEffect(() => {
    const membership = getMembershipFromAccessToken(accessToken);

    if (membership !== null) {
      router.replace(slugPaths.HOME);
    }
  }, [accessToken, router]);
};

const Validation: React.FC<ValidationProps> = ({ accessToken }) => {
  useBackToMyMembershipForUserWithMembership(accessToken);
  const { layout } = useResendEmailStyles();
  return (
    <Grid container direction="column" className={layout}>
      <ValidationSection />
    </Grid>
  );
};
export default Validation;
