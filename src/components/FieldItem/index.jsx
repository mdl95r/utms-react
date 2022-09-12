import React from 'react';
import propTypes from 'prop-types';
import { InputWrap, Input, Label } from 'components';
import styles from './styles.module.scss';

const FieldItem = ({
  label,
  name,
  placeholder,
  value,
  hint,
  getInputValue,
  classes,
}) => {
  return (
    <div className={classes?.fieldItem}>
      <Label htmlFor={name} name={label} />
      <InputWrap>
        <span className={styles.fieldName}>{name}</span>
        <Input
          type="text"
          placeholder={placeholder}
          id={name}
          value={value}
          onInput={(e) => getInputValue?.(e.target.value, name)}
        />
        {hint && <div className={styles.fieldHint}>{hint}</div>}
      </InputWrap>
    </div>
  );
};

FieldItem.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string,
  hint: propTypes.string,
  getInputValue: propTypes.func,
  classes: propTypes.object,
};

export { FieldItem };
