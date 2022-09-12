import propTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Button = ({ children, classes, ...other }) => {
  return (
    <button className={cn(styles.button, classes)} {...other}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  classess: propTypes.string,
};
