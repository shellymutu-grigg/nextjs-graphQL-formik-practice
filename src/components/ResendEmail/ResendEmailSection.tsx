import React, { FC } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { messages } from '@utils/constants';
import { obfuscateEmail } from '@utils/obfuscate-email';
import { Button } from '@components/Button/Button';
import { Link } from '@components/Link/Link';
import { useResendEmailStyles } from './ResendEmailSection.styles';

interface CardProps {
  user: any;
  handleClick: () => void;
  isDisabled: boolean;
  apiError: boolean;
}
export const ResendEmailSection: FC<CardProps> = ({
  user,
  handleClick,
  isDisabled,
  apiError,
}) => {
  const { boldHeader, marginBottomX1point5 } = useResendEmailStyles();

  return (
    <>
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

            {/* <Grid item xs={12}>
              <Typography paragraph align="left" variant="subtitle1">
                {messages.SPAM_FOLDER_CHECK}
              </Typography>
            </Grid> */}

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
                {messages.HELP_TEXT_PART_ONE}
                {messages.MESSAGE_TEXT_ONE}
                <Link href={`mailto:${messages.CONTACT_CENTER_EMAIL}`}>
                  {messages.CONTACT_CENTER_EMAIL}
                </Link>
                {messages.MESSAGE_TEXT_TWO}
                <Link
                  href={`tel:${messages.CONTACT_CENTER_PHONE_NUMBER_TEL_LINK}`}
                >
                  {messages.CONTACT_CENTER_PHONE_NUMBER}
                </Link>
                {/* {messages.MEMBER_CARE_MESSAGE_TEXT_THREE} */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
