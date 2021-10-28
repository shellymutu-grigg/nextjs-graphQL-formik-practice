import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, act } from '@utils/react-testing-utils';
import { messages } from '@utils/constants';
import { request } from '@utils/request';
import { ResendEmailSection } from './ResendEmailSection';

jest.mock('@utils/request', () => ({
  ...jest.requireActual('@utils/request'),
  request: jest.fn(),
}));

describe('Resend Email Section:', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should match snapshot', async () => {
    mockAllIsIntersecting(true);

    const { container } = render(<ResendEmailSection />);

    await waitFor(() => expect(container).toMatchSnapshot());
  });
  test('should show enabled "Resend email" button and then display enabled "Email Sent" button after timer lapses', async () => {
    render(<ResendEmailSection />);

    const resendEmailButton = await screen.findByText(messages.RESEND_CTA);
    await waitFor(() => expect(resendEmailButton).toBeInTheDocument());

    await waitFor(() => userEvent.click(resendEmailButton));

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() =>
      expect(
        screen.getByRole('button', {
          name: messages.RESEND_CTA,
        }),
      ).toBeEnabled(),
    );
  });

  test('should disable the "resend email" button when it is clicked on by the user and enable "resend email" after timer lapses', async () => {
    render(<ResendEmailSection />);

    const resendEmailButton = await screen.findByText(messages.RESEND_CTA);
    await waitFor(() => expect(resendEmailButton).toBeInTheDocument());

    await waitFor(() => userEvent.click(resendEmailButton));
    expect(request).toHaveBeenCalledTimes(1);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() =>
      expect(
        screen.getByRole('button', {
          name: messages.EMAIL_SENT_CTA,
        }),
      ).toBeDisabled(),
    );

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() =>
      expect(
        screen.getByRole('button', {
          name: messages.RESEND_CTA,
        }),
      ).toBeEnabled(),
    );
  });
});
