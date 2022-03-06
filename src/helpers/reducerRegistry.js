import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

export const _data = {
  reducers: {},
  store: null,
  isStoreInitiated: false,
};

export const addReducers = reducerBundle => {
  if (!_data.isStoreInitiated) {
    const store = createStore(
      combineReducers(reducerBundle),
      {},
      applyMiddleware(thunkMiddleware),
    );

    _data.isStoreInitiated = true;
    _data.store = store;
    _data.reducers = { ...reducerBundle };
  } else {
    Object.keys(reducerBundle).forEach(name => {
      if (!_data.reducers[name]) {
        _data.reducers[name] = reducerBundle[name];
      }
    });

    _data.store.replaceReducer(combineReducers(_data.reducers));
  }
};

export const getStore = () => {
  if (!_data.isStoreInitiated) {
    addReducers({});
  }
  return _data.store;
};
