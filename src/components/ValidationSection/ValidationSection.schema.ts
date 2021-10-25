import { dateFormats, validationMessages } from '@utils/constants';
import * as yup from 'yup';
import latinize from 'latinize';
import { isFuture, isSameDay, differenceInYears } from 'date-fns';
import { isValidDate, today, parseDate } from '@utils/date-helpers';

const nameSchema = yup
  .string()
  .required(validationMessages.NAME.REQUIRED)
  .transform((value: string) => latinize(value))
  .matches(/^[A-Za-z'\- ]+$/, validationMessages.NAME.ALLOWED_CHARACTERS)
  .test(
    'not able to have more than 30 characters',
    validationMessages.NAME.MAX_LENGTH,
    (value: any) => {
      return value?.length <= 30;
    },
  )
  .test(
    'more than one space',
    validationMessages.NAME.MORE_THAN_TWO_SPACES,
    (value: any) => value?.split(' ').length <= 3,
  )
  .test(
    'no leading space',
    validationMessages.NAME.NO_LEADING_SPACE,
    (value: any) => {
      return value?.charAt(0) !== ' ';
    },
  );

export const validationSchema = yup.object({
  firstName: nameSchema,
  lastName: nameSchema,
  dateOfBirth: yup
    .string()
    .required(validationMessages.DOB.REQUIRED)
    .typeError(validationMessages.DOB.INVALID)
    .test('valid', validationMessages.DOB.INVALID, (value: string) =>
      isValidDate(value, dateFormats.DATE_DISPLAY_FORMAT),
    )
    .test('min date', validationMessages.DOB.MIN_DATE, (value: any) => {
      return (
        differenceInYears(
          new Date(),
          parseDate(value, dateFormats.DATE_DISPLAY_FORMAT),
        ) < 100
      );
    })
    .test('max date', validationMessages.DOB.MAX_DATE, (value: any) => {
      const valueToDate = parseDate(value, dateFormats.DATE_DISPLAY_FORMAT);

      return !isFuture(valueToDate) && !isSameDay(today(), valueToDate);
    }),
  phone: yup
    .string()
    .required(validationMessages.PHONE_NUMBER.REQUIRED)
    .transform((value: any) => value.replace(/(\s+|_)/g, ''))
    .matches(
      /^0([3-9]|2[0-9])+/,
      validationMessages.PHONE_NUMBER.ALLOWED_CHARACTERS,
    )
    .min(9, validationMessages.PHONE_NUMBER.MIN_LENGTH)
    .max(13, validationMessages.PHONE_NUMBER.MAX_LENGTH),
});
