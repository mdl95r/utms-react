import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Button } from 'components';

const FormDropdown = ({ dropdown, dropdownClickHandler }) => {
  const rootEl = React.useRef(null);
  const [isDropDownOpen, setDropdownOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(dropdown.selectedItem);

  // Use effect своего рода замена компонентам жизненного цикла из классовых компонентов, пустой массив значит, то сработает один раз при монтировании, функция в конце отвечает за поведение при размонтировании
  React.useEffect(() => {
    const onClick = (e) =>
      rootEl.current.contains(e.target) || setDropdownOpen(false);
    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick);
  }, []);

  const clickButtonHandler = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropDownOpen);
  };

  const clickItemHandler = (el) => {
    setSelected(el);

    setDropdownOpen(false);

    if (dropdownClickHandler === undefined) {
      return;
    }

    dropdownClickHandler(el);
  };

  return (
    <div
      ref={rootEl}
      className={cn(styles.dropdown, {
        [styles.dropdownopen]: isDropDownOpen,
      })}
    >
      <Button classes={styles.dropdownCurrent} onClick={clickButtonHandler}>
        {selected}
      </Button>
      <div className={styles.dropdownList}>
        {dropdown.items.map((el) => {
          return (
            <div
              key={el}
              className={styles.dropdownItem}
              onClick={() => clickItemHandler(el)}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

FormDropdown.propTypes = {
  dropdown: PropTypes.shape({
    items: PropTypes.array,
    selectedItem: PropTypes.string,
  }).isRequired,
  dropdownClickHandler: PropTypes.func,
};

export { FormDropdown };
