import React from 'react';
import styles from './styles.module.scss';

export const Form = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};
