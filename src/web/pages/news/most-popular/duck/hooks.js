import { useDispatch, useSelector } from "react-redux";

import { actions as newsActions } from "ducks/news";

export const useConnect = () => {
  const { banners, isLoadingBanners, bannersError } = useSelector(
    state => state.news,
  );
  const dispatch = useDispatch();

  const loadBanners = () => {
    dispatch(newsActions.loadBanners());
  };

  return {
    banners,
    isLoading: isLoadingBanners,
    error: bannersError,
    loadBanners,
  };
};
