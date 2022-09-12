import React from 'react';
import { defaultState, hints, ownChooseRadio, socials } from '../../constants';
import { Context } from 'store';
import { UTMS_ACTIONS } from 'store/reducer/constants';
import { RadioItems } from 'components';

const radios = [
  { name: 'Свои значения', id: 'own-choose-radio' },
  { name: 'Google Adwords', id: 'google' },
  { name: 'Яндекс.Директ', id: 'yandex' },
  { name: 'Вконтакте', id: 'vk' },
  { name: 'Facebook', id: 'facebook' },
];

export const RadioGroupSourcesContainer = () => {
  const [, dispatch] = React.useContext(Context);

  const radioClickHandler = (id) => {
    if (id === ownChooseRadio) {
      dispatch({
        type: UTMS_ACTIONS.setValues,
        payload: { ...defaultState, ...hints.defaultState },
      });

      dispatch({
        type: UTMS_ACTIONS.setFields,
        payload: { ...defaultState },
      });

      return;
    }

    dispatch({
      type: UTMS_ACTIONS.setValues,
      payload: { ...socials[id], ...hints[id] },
    });

    dispatch({
      type: UTMS_ACTIONS.setFields,
      payload: { ...socials[id] },
    });
  };

  return <RadioItems radioClickHandler={radioClickHandler} radios={radios} />;
};
