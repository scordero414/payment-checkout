import MainPage from '@/src/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('@/src/redux/products/products-api', () => ({
  useGetProductsQuery: () => ({
    data: [
      {
        id: 2,
        title: 'newTitle',
        price: 500000,
        description:
          'Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.',
        images: [
          'https://i.imgur.com/1twoaDy.jpeg',
          'https://i.imgur.com/FDwQgLy.jpeg',
          'https://i.imgur.com/kg1ZhhH.jpeg',
        ],
        creationAt: '2024-03-16T04:29:50.000Z',
        updatedAt: '2024-03-16T16:51:59.000Z',
        category: {
          id: 1,
          name: 'Clothes',
          image: 'https://i.imgur.com/QkIa5tT.jpeg',
          creationAt: '2024-03-16T04:29:50.000Z',
          updatedAt: '2024-03-16T16:01:35.000Z',
        },
      },
    ],
    isLoading: false,
    error: null,
  }),
}));

describe('MainPage', () => {
  it('Renders the main page correctly', () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
