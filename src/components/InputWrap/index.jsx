import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export const InputWrap = ({ children, classes }) => {
  return (
    <div
      className={cn(styles.inputWrap, {
        [classes]: classes,
      })}
    >
      {children}
    </div>
  );
};

InputWrap.propTypes = {
  children: propTypes.array.isRequired,
};
