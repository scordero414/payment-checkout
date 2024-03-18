import ProductPage from '@/app/product/[productId]/page';
import { render, waitFor } from '@testing-library/react'; // Update the path as needed
import { notFound } from 'next/navigation';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { Product } from '@/types/products';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { AppStore } from '@/redux/store';
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

fetchMock.enableMocks();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockStore = configureStore();

describe('ProductPage', () => {
  let store: AppStore;
  beforeEach(() => {
    fetchMock.resetMocks();
    store = mockStore({ paymentCheckoutSlice: { value: '' } });
  });

  it('should render product details', async () => {
    const productId = '20';
    const product: Product = {
      id: 20,
      title: 'Test Product',
      description: 'Test Description',
      price: 110,
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    };
    fetchMock.mockResponseOnce(JSON.stringify(product));

    const jsx = await ProductPage({ params: { productId } });

    const { getByText, container } = render(
      <Provider store={store}>{jsx}</Provider>
    );

    await waitFor(() => {
      expect(getByText(product.title)).toBeInTheDocument();
      expect(getByText(product.description)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  it('should call notFound if product is not found', async () => {
    const productId = '2';
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const jsx = await ProductPage({ params: { productId } });

    render(<Provider store={store}>{jsx}</Provider>);

    await waitFor(() => {
      expect(notFound).toHaveBeenCalled();
    });
  });
});
