/**
 * Returns the display type for the phone number field. For landline numbers
 * (between 03 & 09) the formatting is different from mobile numbers. Also, Max
 * length allowed for phone numbers that AA core supports is 13.
 *
 * NOTE: This works with `<NumberFormat />` component only as it sets the
 * `format` for the component.
 *
 * @see https://www.npmjs.com/package/react-number-format
 * @see
 * https://aadigital.atlassian.net/wiki/spaces/LG/pages/1359020100/AA+Core+phone+numbers
 */
export const phoneNumberFormat = (value: string | null) =>
  value && value.substr(0, 2) >= '03' && value.substr(0, 2) <= '09'
    ? '## ### ########'
    : '### ### #######';

/**
 * Returns the display type for the membership number field. Max length allowed
 * is 16 digits.
 *
 * NOTE: This works with `<NumberFormat />` component only as it sets the
 * `format`` for the component.
 *
 * @see https://www.npmjs.com/package/react-number-format
 */
export const membershipNumberFormat = () => '#### #### #### ####';
