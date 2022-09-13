import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Context } from 'store';
import { Button, Input, InputWrap } from 'components';
import { generateUrl } from 'helpers/generateUrl';
import { UTMS_ACTIONS } from 'store/reducer/constants';

export const OutputAddressContainer = () => {
  const [state, dispatch] = React.useContext(Context);

  const generatedResult = generateUrl(state);

  const copyResult = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(generatedResult);

    dispatch({
      type: UTMS_ACTIONS.setVisiblePopup,
      payload: true,
    });

    setTimeout(() => {
      dispatch({
        type: UTMS_ACTIONS.setVisiblePopup,
        payload: false,
      });
    }, 2000);
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
        value={generatedResult}
      />
    </InputWrap>
  );
};
