import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Label = ({ htmlFor, name }) => {
  return (
    <label className={cn(styles.label)} htmlFor={htmlFor}>
      {name}
    </label>
  );
};

Label.propTypes = {
  htmlFor: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
