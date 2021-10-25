import { ValueOf } from '@interfaces/page-queries';
import { parse, isValid, format } from 'date-fns';
import { dateFormats } from './constants';

export const today = () => new Date();

/**
 * Parses the date with the format given.
 *
 * @param {string} value value which needs to be parsed.
 * @param {ValueOf<typeof dateFormats>} dateFormat format that is used to parse
 * the date.
 * @returns parsed date.
 */
export function parseDate(
  value: string,
  dateFormat: ValueOf<typeof dateFormats>,
) {
  return parse(value, dateFormat, today());
}

/**
 * Checks if the date is a valid one or not by using the parseFormat.
 *
 * @example If value is `2021-10-11` the parseFormat needs to be `yyyy-MM-dd`
 * only then it is a valid date. This is useful when parsing back the API
 * response since all our API responses are going to be in `yyyy-MM-dd` format,
 * where as on the UI we want to display it in `dd/MM/yyyy` format.
 *
 * @example If value is `11/10/2021` the parseFormat needs to be `dd/MM/yyyy`
 * (which is the default).
 *
 * @param {string} value value which needs to be verified.
 * @param {string} parseFormat format that is used to parse the date.
 * @returns true if the date is valid otherwise false.
 */
export function isValidDate(
  value: any,
  parseFormat = dateFormats.DATE_DISPLAY_FORMAT,
) {
  return isValid(parseDate(value, parseFormat));
}

/**
 * Formats date after validating and parsing it.
 *
 * @example If value is `2021-10-11` the parseFormat needs to be `yyyy-MM-dd`
 * only then it is a valid date. This is useful when parsing back the API
 * response since all our API responses are going to be in `yyyy-MM-dd` (which
 * is the default) format.
 *
 * @param {string} value value which needs to be formatted.
 * @param {ValueOf<typeof dateFormats>} resultFormat resulting format.
 * @param {ValueOf<typeof dateFormats>} parseFormat format that is used to parse
 * the date (defaults to `yyyy-MM-dd`).
 * @returns formatted date string.
 */
export function formatDate(
  value: string | undefined | null,
  resultFormat: ValueOf<typeof dateFormats>,
  parseFormat: ValueOf<typeof dateFormats> = dateFormats.yyyy_MM_dd,
) {
  if (!value) {
    return '';
  }
  const parsedDate = parseDate(value, parseFormat);
  return isValid(parsedDate) ? format(parsedDate, resultFormat) : '';
}
