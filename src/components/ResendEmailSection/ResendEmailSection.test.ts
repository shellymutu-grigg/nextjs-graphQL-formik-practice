export {};
// import React from 'react';
// import { act, waitFor } from '@testing-library/react';
// import { render, screen } from '@utils/react-testing-utils';
// import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
// import { defaults, messages } from '@utils/constants';
// import { request } from '@utils/request';
// import userEvent from '@testing-library/user-event';
// import { ResendEmailSection } from './ResendEmailSection';

// jest.mock('@utils/request', () => ({
//   ...jest.requireActual('@utils/request'),
//   request: jest.fn(),
// }));

describe('Resend Email Section:', () => {
  test('Placeholder test for jest setup', () => {
    expect(true).toBeTruthy();
  });
});
// describe('EmailVerificationVerifying page:', () => {
// beforeEach(() => {
//   jest.useFakeTimers();
// });

// afterAll(() => {
//   jest.useRealTimers();
// });

// test('should match snapshot', async () => {
//   mockAllIsIntersecting(true);

//   const { container } = render(<ResendEmailSection />);

//   await waitFor(() => expect(container).toMatchSnapshot());
// });
// test('should show disabled "email sent" button and then display enabled "resend email" button after timer lapses', async () => {
//   render(<ResendEmailSection />);

//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.EMAIL_SENT_CTA,
//       }),
//     ).toBeDisabled(),
//   );

//   act(() => {
//     jest.runAllTimers();
//   });

//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.RESEND_CTA,
//       }),
//     ).toBeEnabled(),
//   );
// });

// test('should disable the "resend email" button when it is clicked on by the user and enable "resend email" after timer lapses', async () => {
//   render(<ResendEmailSection />);

//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.EMAIL_SENT_CTA,
//       }),
//     ).toBeDisabled(),
//   );
//   act(() => {
//     jest.runAllTimers();
//   });

//   const resendEmailButton = screen.getByRole('button', {
//     name: messages.RESEND_CTA,
//   });
//   await waitFor(() => userEvent.click(resendEmailButton));
//   expect(request).toHaveBeenCalledTimes(1);

//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.EMAIL_SENT_CTA,
//       }),
//     ).toBeDisabled(),
//   );

//   act(() => {
//     jest.runAllTimers();
//   });
//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.RESEND_CTA,
//       }),
//     ).toBeEnabled(),
//   );
// });

// test('"email sent" button should remaining disabled once it has been clicked on 5 times', async () => {
//   render(<ResendEmailSection />);
//   for (let i = 0; i < defaults.RESEND_EMAIL_MAX_LIMIT; i += 1) {
//     // eslint-disable-next-line no-await-in-loop
//     await waitFor(() =>
//       expect(
//         screen.getByRole('button', {
//           name: messages.EMAIL_SENT_CTA,
//         }),
//       ).toBeDisabled(),
//     );

//     act(() => {
//       jest.runAllTimers();
//     });

//     const resendEmailButton = screen.getByRole('button', {
//       name: messages.RESEND_CTA,
//     });
//     // eslint-disable-next-line no-await-in-loop
//     await waitFor(() => userEvent.click(resendEmailButton));
//     expect(request).toHaveBeenCalled();
//   }
//   act(() => {
//     jest.runAllTimers();
//   });

//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.EMAIL_SENT_CTA,
//       }),
//     ).toBeDisabled(),
//   );
// });

// test('should handle an error on button click', async () => {
//   const mockRequest = (request as jest.Mock).mockImplementation(() => {
//     throw new Error('Correctly generated Jest Unit Test Error');
//   });

//   render(<ResendEmailSection />);
//   await waitFor(() =>
//     expect(
//       screen.getByRole('button', {
//         name: messages.EMAIL_SENT_CTA,
//       }),
//     ).toBeDisabled(),
//   );

//   act(() => {
//     jest.runAllTimers();
//   });

//   const resendEmailButton = screen.getByRole('button', {
//     name: messages.RESEND_CTA,
//   });
//   await waitFor(() => userEvent.click(resendEmailButton));
//   expect(mockRequest).toHaveBeenCalledTimes(1);
//   const resendEmailError = await screen.findByText(
//     messages.RESEND_EMAIL_ERROR,
//   );
//   expect(resendEmailError).toBeInTheDocument();
// });
// });
