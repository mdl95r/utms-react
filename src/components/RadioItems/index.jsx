import React from 'react';
import { RadioItem } from 'components/RadioItem';

export const RadioItems = ({ radioClickHandler, radios, radioName }) => {
  return radios.map((el, index) => {
    return (
      <RadioItem
        key={el.id}
        name={el.name}
        id={el.id}
        index={index}
        radioClickHandler={radioClickHandler}
        radioName={radioName}
      />
    );
  });
};
