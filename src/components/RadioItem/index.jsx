import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'components';
import styles from './styles.module.scss';

const RadioItem = ({
  name,
  id,
  index,
  radioClickHandler,
  radioName = 'radio',
}) => {
  return (
    <div className={styles.radioItem}>
      <label className={styles.radioLabel}>
        {name}
        <Input
          className={styles.radioInput}
          defaultChecked={index === 0}
          type="radio"
          name={radioName}
          onClick={() => radioClickHandler?.(id)}
        />
        <span className={styles.radio}></span>
      </label>
    </div>
  );
};

RadioItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  radioName: propTypes.string,
};

export { RadioItem };
