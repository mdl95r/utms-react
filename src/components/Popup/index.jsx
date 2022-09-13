import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Popup = (props) => {
  return (
    <div
      className={cn(styles.popup, props.classes.popup, {
        [props.classes.visible]: props.isVisible,
      })}
    >
      {props.children}
    </div>
  );
};

Popup.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object])
    .isRequired,
  classes: propTypes.object.isRequired,
  isVisible: propTypes.bool.isRequired,
};

export { Popup };
