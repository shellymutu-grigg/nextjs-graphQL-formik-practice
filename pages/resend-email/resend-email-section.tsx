import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useUser } from '@auth0/nextjs-auth0';
import { defaults, messages } from '@utils/constants';
import { obfuscateEmail } from '@utils/obfuscate-email';
import { Button } from '@components/Button/Button';
import { MemberCareMessage } from '@components/MemberCareMessage/MemberCareMessage';
import { resendEmail } from '@services/client/authentication.client';
import { useResendEmailStyles } from '@components/resend-email.styles';

const ResendEmailSection: React.FC = () => {
  const { layout, boldHeader, marginBottomX1point5 } = useResendEmailStyles();
  const user = useUser()?.user;
  const [isDisabled, setIsDisabled] = useState(true);
  const [resendEmailCount, setresendEmailCount] = useState(0);
  const [apiError, setAPIError] = useState(false);

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
      <Grid
        component={Grid}
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
      >
        <Grid
          container
          item
          sm={10}
          lg={8}
          xl={6}
          justifyContent="center"
          // this class name is used not only for styling but also in `scroll-to.js`

          className="main-content"
        >
          <Grid
            container
            item
            xs={12}
            md={10}
            xl={8}
            ref={null}
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            className={marginBottomX1point5}
            wrap="wrap"
          >
            <Grid item xs={12}>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  className={boldHeader}
                >
                  {messages.VERIFICATION}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography paragraph align="left" variant="body2">
                {messages.CHECK_EMAIL_PART_ONE}

                {user ? obfuscateEmail(user?.email) : ''}

                {messages.CHECK_EMAIL_PART_TWO}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography paragraph align="left" variant="subtitle1">
                {messages.SPAM_FOLDER_CHECK}
              </Typography>
            </Grid>

            <Box component={Grid} pb={2}>
              <Button
                type="submit"
                onClick={handleClick}
                size="large"
                fontWeight="bold"
                variant="primary"
                showShadow={true}
                disabled={isDisabled}
                text={
                  isDisabled ? messages.EMAIL_SENT_CTA : messages.RESEND_CTA
                }
              />
            </Box>

            {apiError ? (
              <Grid item xs={12}>
                <Typography
                  paragraph
                  align="center"
                  variant="body2"
                  color="error"
                >
                  {messages.RESEND_EMAIL_ERROR}
                </Typography>
              </Grid>
            ) : null}

            <Grid item xs={12}>
              <Typography paragraph align="left" variant="subtitle1">
                <MemberCareMessage helperText={messages.HELP_TEXT_PART_ONE} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResendEmailSection;
