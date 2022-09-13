import { Popup } from 'components';
import React from 'react';
import { Context } from 'store';
import styles from './styles.module.scss';

export const PopupContainer = () => {
  const [state] = React.useContext(Context);
  return (
    <Popup classes={styles} isVisible={state.isVisiblePopup}>
      Ссылка скопирована!
    </Popup>
  );
};
