import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Context } from 'store';
import { Button, Input, InputWrap } from 'components';

export const OutputAddressContainer = () => {
  const [state] = React.useContext(Context);

  const generateResult = () => {
    let str = Object.entries(state.fields)
      .map(([key, val]) => {
        return val ? `${key}=${val}&` : null;
      })
      .join('');

    str = str.slice(0, str.length - 1);

    return state.baseURL.address !== ''
      ? `${Object.values(state.baseURL).join('')}/?${str}`
      : '';
  };

  const copyResult = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(generateResult());
  };

  return (
    <InputWrap classes={styles.inputWrap}>
      <Button
        disabled={state.disableButton}
        classes={cn(styles.button)}
        onClick={copyResult}
      >
        Копировать ссылку
      </Button>

      <Input
        type="text"
        readOnly
        placeholder="Здесь появится результат ваших действий..."
        value={generateResult()}
      />
    </InputWrap>
  );
};
