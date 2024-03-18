import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { paymentCheckoutApi } from '@/redux/payment-checkout/payment-checkout-api';
import { rootReducer } from '@/redux/store/root-reducer';
import { productsApi } from '@/redux/products/products-api';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  let store: any = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(paymentCheckoutApi.middleware)
        .concat(productsApi.middleware);
    },
  });
  store.__persistor = persistStore(store);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
// export const persistor = persistStore(store);

// export type AppStore = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
