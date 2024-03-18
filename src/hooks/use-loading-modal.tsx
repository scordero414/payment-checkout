import { setLoadingModal } from '@/redux/general/general-info-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useIsLoadingModal = (isLoading: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingModal(isLoading));
  }, [isLoading]);
};
