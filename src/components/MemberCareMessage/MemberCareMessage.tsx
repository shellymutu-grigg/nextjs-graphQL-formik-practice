import React from 'react';
import { Link } from '@material-ui/core';
import { messages } from '@utils/constants';

export interface MemberCareMessageProps {
  helperText: string;
}

export const MemberCareMessage: React.FC<MemberCareMessageProps> = ({
  helperText,
}) => {
  return (
    <>
      {helperText}
      {messages.MEMBER_CARE_MESSAGE_TEXT_ONE}
      <Link href={`mailto:${messages.CONTACT_CENTER_EMAIL}`} onClick={() => {}}>
        {messages.CONTACT_CENTER_EMAIL}
      </Link>
      {messages.MEMBER_CARE_MESSAGE_TEXT_TWO}
      <Link
        href={`tel:${messages.CONTACT_CENTER_PHONE_NUMBER_TEL_LINK}`}
        onClick={() => {}}
      >
        {messages.CONTACT_CENTER_PHONE_NUMBER}
      </Link>
      {messages.MEMBER_CARE_MESSAGE_TEXT_THREE}
    </>
  );
};
