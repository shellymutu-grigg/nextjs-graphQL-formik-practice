/**
 * Hide most of the characters from an email address
 * If the text before the last @ symbol is 3 characters or more -
 * split the section of email before the last @ into two parts - first one or two characters, and
 * replace the rest with * - ie te****@email.com
 * otherwise obfuscate all characters appearing before last @ symbol
 *
 * @param {string} email address
 * @return {string} obfuscated email address
 */

export const obfuscateEmail = (email: string | undefined | null) => {
  const regex = /^(.*?)(?=@[^@]+$)/;
  const replacer = (match: string) => {
    if (match.length < 3) return '*'.repeat(match.length);
    return [match.substring(0, 2), '*'.repeat(match.length - 2)].join('');
  };
  return email?.replace(regex, replacer);
};
