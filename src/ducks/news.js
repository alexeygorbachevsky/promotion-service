import { getLastNews, getBanners } from "mocked-backend";

import { makePaginatedLastNews } from "helpers/news";

export const actionTypes = {
  CHANGE_VALUE: "news.CHANGE_VALUE",

  LOAD_LAST_NEWS_SUCCESS: "tasks.LOAD_LAST_NEWS_SUCCESS",
  LOAD_LAST_NEWS_ERROR: "tasks.LOAD_LAST_NEWS_ERROR",

  LOAD_BANNERS_SUCCESS: "tasks.LOAD_BANNERS_SUCCESS",
  LOAD_BANNERS_ERROR: "tasks.LOAD_BANNERS_ERROR",
};

export const initialState = {
  lastNews: {},
  banners: [],
  lastNewsTotalCount: 0,

  isLoadingLastNews: false,
  isLoadingBanners: false,
  lastNewsError: null,
  bannersError: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE: {
      const { name, value, values } = action.payload;

      if (values) {
        let newValues = {};
        values.forEach(pair => {
          newValues = {
            ...newValues,
            [pair.name]: pair.value,
          };
        });
        return {
          ...state,
          ...newValues,
        };
      }

      return {
        ...state,
        [name]: value,
      };
    }

    case actionTypes.LOAD_LAST_NEWS_SUCCESS: {
      const { lastNews, totalCount } = action.payload;

      return {
        ...state,
        isLoadingLastNews: false,
        lastNews: { ...state.lastNews, ...lastNews },
        lastNewsTotalCount: totalCount,
      };
    }

    case actionTypes.LOAD_LAST_NEWS_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoadingLastNews: false,
        lastNewsError: error,
      };
    }

    case actionTypes.LOAD_BANNERS_SUCCESS: {
      const { banners } = action.payload;

      return {
        ...state,
        isLoadingBanners: false,
        banners,
      };
    }

    case actionTypes.LOAD_BANNERS_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoadingBanners: false,
        bannersError: error,
      };
    }

    default: {
      return state;
    }
  }
};

export const actions = {
  changeValue(name, value) {
    let payload = { name, value };
    if (Array.isArray(name)) {
      payload = { values: name };
    }
    return { type: actionTypes.CHANGE_VALUE, payload };
  },

  // Don't send page param for loading all pages
  loadLastNews({ itemsPerPage, page } = {}) {
    return async dispatch => {
      dispatch(actions.changeValue("isLoadingLastNews", true));

      let successPayload;
      let failurePayload;

      try {
        const { lastNews, totalCount } = await getLastNews({
          itemsPerPage,
          page,
        });
        const paginatedLastNews = makePaginatedLastNews({
          lastNews,
          itemsPerPage,
          page,
        });

        successPayload = {
          lastNews: paginatedLastNews,
          totalCount,
        };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.LOAD_LAST_NEWS_ERROR,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.LOAD_LAST_NEWS_SUCCESS,
        payload: successPayload,
      });
    };
  },

  loadBanners() {
    return async dispatch => {
      dispatch(actions.changeValue("isLoadingBanners", true));

      let successPayload;
      let failurePayload;

      try {
        const banners = await getBanners();

        successPayload = {
          banners,
        };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.LOAD_BANNERS_ERROR,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.LOAD_BANNERS_SUCCESS,
        payload: successPayload,
      });
    };
  },
};
