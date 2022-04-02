import { useDispatch, useSelector } from "react-redux";

import { actions as alertActions } from "ducks/alerts";

export const useConnect = () => {
  const { alerts } = useSelector(state => state.alerts);
  const dispatch = useDispatch();

  const onCloseAlert = id => {
    dispatch(alertActions.removeAlert(id));
  };

  return {
    alerts,
    onCloseAlert,
  };
};
