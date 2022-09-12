import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Group = ({ type, children }) => {
  return (
    <div className={cn(styles.group, { [styles[type]]: type })}>{children}</div>
  );
};

Group.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};
