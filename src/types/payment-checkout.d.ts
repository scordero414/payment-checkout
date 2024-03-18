export interface PaymentCheckoutState {
  value: string;
}

export interface CreditCardData {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  holderName: string;
}
