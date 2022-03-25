import { getLastNews } from "mocked-backend";
import { makePaginatedLastNews } from "helpers/news";

export const actionTypes = {
  CHANGE_VALUE: "auth.CHANGE_VALUE",
};

export const initialState = {
  lastNews: {},
  lastNewsPage: 1,

  lastNewsTotalCount: 0,
  isLoadingLastNews: false,
  lastNewsError: null,
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
    return async (dispatch, getState) => {
      dispatch(actions.changeValue("isLoadingLastNews", true));

      const prevLastNews = getState().news.lastNews;

      let paginatedLastNews;
      let error;
      let lastNewsTotalCount;
      try {
        const { lastNews, totalCount } = await getLastNews({
          itemsPerPage,
          page,
        });
        paginatedLastNews = makePaginatedLastNews({
          lastNews,
          itemsPerPage,
          page,
        });
        lastNewsTotalCount = totalCount;
      } catch (err) {
        error = err;
      }

      if (error) {
        dispatch(
          actions.changeValue([
            { name: "isLoadingLastNews", value: false },
            {
              name: "lastNewsError",
              value: error,
            },
          ]),
        );
        return;
      }

      dispatch(
        actions.changeValue([
          { name: "isLoadingLastNews", value: false },
          {
            name: "lastNews",
            value: { ...prevLastNews, ...paginatedLastNews },
          },
          {
            name: "lastNewsTotalCount",
            value: lastNewsTotalCount,
          },
        ]),
      );
    };
  },
};
