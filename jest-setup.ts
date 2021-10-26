import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// @ts-ignore
global.loader = {
  enqueue: jest.fn(),
};

window.scrollTo = () => {};

/**
 * This resolves the `parentStyleSheet` undefined warning due to `JSS`.
 * @see https://stackoverflow.com/a/66903658/2791678
 */
window.CSSStyleSheet.prototype.insertRule = (rule) => {
  const styleElement = document.createElement('style');
  const textNode = document.createTextNode(rule);
  styleElement.appendChild(textNode);
  document.head.appendChild(styleElement);
  return 0;
};

require('jest-fetch-mock').enableMocks();
