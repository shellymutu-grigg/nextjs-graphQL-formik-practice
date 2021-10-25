/**
 * Date Formats based on date-fns accepted patterns.
 *
 * @see https://date-fns.org/v2.23.0/docs/format#description
 */
export const dateFormats = {
  dd_MMM_yyyy: 'dd MMM yyyy',
  yyyy_MM_dd: 'yyyy-MM-dd',
  MMMM_yyyy: 'MMMM yyyy',
  dd_MMMM_yyyy: 'dd MMMM yyyy',
  DATE_DISPLAY_FORMAT: 'dd/MM/yyyy',
  DATE_VALUE_FORMAT: 'yyyy-MM-dd',
} as const;

/**
 * Defaults
 */
export const defaults = {
  EMAIL_ADDRESS_MAX_LENGTH: 64,
  FAILURE_STATUSCODE: 500,
  FIRST_NAME_MAX_LENGTH: 50,
  LAST_NAME_MAX_LENGTH: 50,
  RESEND_EMAIL_MAX_LIMIT: 5,
  RESEND_EMAIL_TIME_OUT: 3000,
  SUCCESS_STATUSCODE: 200,
} as const;

/**
 * Defaults
 */
export const errors = {
  NO_MATCHING_DETAILS:
    "Sorry, we couldn't match those details to a Membership.",
  CORRECTLY_ENTER_DETAILS: 'Please check your details are entered correctly.',
  CONTINUED_ERROR_PART_1:
    'If you continue to get this error, please give us a call on',
} as const;

/**
 * Reusable messages used in application
 * @type {Object.<string, string>}
 */
export const messages = {
  CHECK_EMAIL_PART_ONE: "Check the email we've sent to ",
  CHECK_EMAIL_PART_TWO: ' and click the link to verify your email',
  CONTACT_CENTER_EMAIL: 'test@email.com',
  CONTACT_CENTER_PHONE_NUMBER: '0800 GET HELP',
  CONTACT_CENTER_PHONE_NUMBER_TEL_LINK: '0800022022',
  DATE_OF_BIRTH: 'Date of birth',
  EMAIL_SENT_CTA: 'Email Sent',
  ENTER_DETAILS_PART_ONE: "Populate the following fields and click '",
  ENTER_DETAILS_PART_TWO: "' to identify your membership record.",
  FIRST_NAME: 'First name',
  HELP_TEXT_PART_ONE: 'If you need help, ',
  LAST_NAME: 'Last name',
  MESSAGE_TEXT_ONE: 'please email us at ',
  MESSAGE_TEXT_TWO: ' or give us a call on ',
  NEXT_CTA_TEXT: 'Next',
  PHONE_NUMBER: 'Phone number',
  RESEND_CTA: 'Resend email',
  RESEND_EMAIL_ERROR:
    'We seem to be having issues right now. Please try again later.',
  SPAM_FOLDER_CHECK:
    "Remember to check spam and other folders. If you haven't received an email from us, you can " +
    'click the button below in 60 seconds to resend it.',
  VERIFICATION: 'Verification',
} as const;

export const LOGIN_URL = '/api/auth/login';
export const NEXT_PUBLIC_API = '/api/graphql';

/**
 * Slugs for all the pages in the app. This should match the slug paths
 * configured in Contentful.
 * @type {Object.<string, string>} slugPaths
 */
export const slugPaths = {
  RESEND_EMAIL: '/resend-email',
} as const;

/**
 * Field validation messages.
 */
export const validationMessages = {
  DOB: {
    REQUIRED: 'Date of birth is required',
    INVALID: 'Must be a valid date',
    MIN_DATE: 'Must not be more than 100 years in the past',
    MAX_DATE: "Must be earlier than today's date",
  },
  EMAIL_ADDRESS: {
    REQUIRED: 'Email address is required',
    INVALID: 'Must be a valid email address',
  },
  NAME: {
    REQUIRED: 'This field is required',
    ALLOWED_CHARACTERS: 'Must contain alpha and accented characters only',
    MORE_THAN_TWO_SPACES: 'Must not contain more than two space characters',
    NO_LEADING_SPACE: 'Must not start with a space character',
    MAX_LENGTH: 'Must be less than 30 characters',
  },
  MEMBERSHIP_NUMBER: {
    REQUIRED: 'Membership number is required',
    DEFAULT_START_VALUE: 'Must start with 3083 26',
    MIN_MAX_LENGTH: 'Must be 16 digits long',
  },
  PHONE_NUMBER: {
    REQUIRED: 'Phone number is required',
    ALLOWED_CHARACTERS: 'Must start with 020-029 or 03-09',
    MIN_LENGTH: 'Must have at least 9 digits',
    MAX_LENGTH: 'Must be less than 13 digits long',
    AT_LEAST_ONE_NUMBER_IS_REQUIRED:
      'At least one phone number should be populated',
  },
} as const;
