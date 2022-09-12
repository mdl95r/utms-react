import React from 'react';
import { Context } from 'store';
import { UTMS_ACTIONS } from 'store/reducer/constants';
import { Input } from 'components';

export const InputAddressContainer = () => {
  const [state, dispatch] = React.useContext(Context);

  const inputHandler = (address) => {
    if (address === '') {
      dispatch({
        type: UTMS_ACTIONS.setDisableButton,
        payload: true,
      });

      dispatch({
        type: UTMS_ACTIONS.setBaseURL,
        payload: { address: '' },
      });

      return;
    }

    dispatch({
      type: UTMS_ACTIONS.setBaseURL,
      payload: { address },
    });

    dispatch({
      type: UTMS_ACTIONS.setDisableButton,
      payload: false,
    });
  };

  return (
    <Input
      type="text"
      placeholder="Введите адрес страницы"
      onChange={(e) => inputHandler(e.target.value)}
      value={state.baseURL.address}
    />
  );
};
