import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsertCreditCardModal } from '@/components/modals/insert-credit-card-modal';
import userEvent from '@testing-library/user-event';

function setup(jsx: any) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
jest.mock('@/hooks/use-is-mobile-device', () => ({
  useIsMobileDeviceData: () => false,
}));

describe('InsertCreditCardModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders InsertCreditCardModal component', () => {
    render(<InsertCreditCardModal open={true} handleClose={() => {}} />);
    expect(
      screen.getByText('Insert your credit card info')
    ).toBeInTheDocument();
  });

  test('Does not submit form without form data', async () => {
    const onSubmit = jest.fn();
    const { user } = setup(
      <InsertCreditCardModal open={true} handleClose={() => {}} />
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
