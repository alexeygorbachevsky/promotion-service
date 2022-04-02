import { useDispatch, useSelector } from "react-redux";

import { actions as newsActions } from "ducks/news";

export const useConnect = () => {
  const dispatch = useDispatch();
  const {
    lastNews,
    lastNewsError: error,
    isLoadingLastNews,
    lastNewsTotalCount,
  } = useSelector(state => state.news);

  const loadLastNews = params => {
    dispatch(newsActions.loadLastNews(params));
  };

  const setPageNumber = pageNumber => {
    dispatch(newsActions.changeValue("lastNewsPage", pageNumber));
  };

  return {
    lastNews,
    error,
    isLoadingLastNews,
    lastNewsTotalCount,
    loadLastNews,
    setPageNumber,
  };
};
