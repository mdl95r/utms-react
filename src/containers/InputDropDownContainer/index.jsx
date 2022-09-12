import React from 'react';
import { dropdownProps } from 'constants/dropdownProps';
import { Context } from 'store';
import { UTMS_ACTIONS } from 'store/reducer/constants';
import { FormDropdown } from 'components';

export const InputDropDownContainer = () => {
  const [, dispatch] = React.useContext(Context);

  const dropdownClickHandler = (el) => {
    dispatch({
      type: UTMS_ACTIONS.setBaseURL,
      payload: { protocol: el },
    });
  };

  return (
    <FormDropdown
      dropdown={dropdownProps}
      dropdownClickHandler={dropdownClickHandler}
    />
  );
};
