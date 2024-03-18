import { Product } from '@/types/products';

export interface PaymentCheckoutState {
  value: string;
}

export interface CreditCardData {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  holderName: string;
}

export interface ProcessPaymentData {
  cardData: string;
  product: Product;
}
