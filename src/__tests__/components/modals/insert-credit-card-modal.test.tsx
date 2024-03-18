import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsertCreditCardModal } from '@/components/modals/insert-credit-card-modal';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppStore } from '@/redux/store';

function setup(jsx: any) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const mockStore = configureStore();

jest.mock('@/hooks/use-is-mobile-device', () => ({
  useIsMobileDeviceData: () => false,
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('InsertCreditCardModal', () => {
  let store: AppStore;

  beforeEach(() => {
    store = mockStore({ paymentCheckoutSlice: { value: '' } });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders InsertCreditCardModal component', () => {
    render(
      <Provider store={store}>
        <InsertCreditCardModal
          open={true}
          handleClose={() => {}}
          processCheckout={() => {}}
        />
      </Provider>
    );
    expect(
      screen.getByText('Insert your credit card info')
    ).toBeInTheDocument();
  });

  test('Does not submit form without form data', async () => {
    const onSubmit = jest.fn();
    const { user } = setup(
      <Provider store={store}>
        <InsertCreditCardModal
          open={true}
          handleClose={() => {}}
          processCheckout={() => {}}
        />
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
