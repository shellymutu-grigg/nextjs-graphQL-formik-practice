import React, { useEffect, useState } from 'react';
import { ResendEmailSection } from '@components/ResendEmailSection/ResendEmailSection';
import { Grid } from '@material-ui/core';
import { useUser } from '@auth0/nextjs-auth0';
import { defaults } from '@utils/constants';
import { resendEmail } from '@services/client/authentication.client';
import { useResendEmailStyles } from '@components/ResendEmailSection/ResendEmailSection.styles';

const ResendEmailLayout: React.FC = () => {
  const user = useUser()?.user;
  const [isDisabled, setIsDisabled] = useState(true);
  const [resendEmailCount, setresendEmailCount] = useState(0);
  const [apiError, setAPIError] = useState(false);
  const { layout } = useResendEmailStyles();

  /*
   * Set the state of the button depending on disabled state
   * Create timer to activate button after RESEND_EMAIL_TIME_OUT is complete.
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      // if the RESEND_EMAIL_MAX_LIMIT is reached leave button disabled

      setIsDisabled(resendEmailCount >= defaults.RESEND_EMAIL_MAX_LIMIT);
    }, defaults.RESEND_EMAIL_TIME_OUT);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isDisabled, resendEmailCount]);

  const handleClick = async () => {
    try {
      await resendEmail();
      setIsDisabled(true);
      setAPIError(false);
      setresendEmailCount(resendEmailCount + 1);
    } catch (error) {
      setAPIError(true);
      setIsDisabled(true);
    }
  };

  return (
    <Grid container direction="column" className={layout}>
      <ResendEmailSection
        user={user}
        handleClick={handleClick}
        isDisabled={isDisabled}
        apiError={apiError}
      />
    </Grid>
  );
};

export default ResendEmailLayout;
