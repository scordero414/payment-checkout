import MainPage from '@/app/page';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

jest.mock('@/redux/products/products-api', () => ({
  useGetProductsQuery: () => ({
    data: [
      {
        id: 2,
        title: 'newTitle',
        price: 500000,
        description:
          'Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.',
        images: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      },
    ],
    isLoading: false,
    error: null,
  }),
}));

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));

describe('MainPage', () => {
  it('Renders the main page correctly', () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
