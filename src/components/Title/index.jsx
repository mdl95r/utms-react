import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Title = ({ name, classes }) => {
  return (
    <h2
      className={cn(styles.title, {
        [classes]: classes,
      })}
    >
      {name}
    </h2>
  );
};

Title.propTypes = {
  name: propTypes.string.isRequired,
};
