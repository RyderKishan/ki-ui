import React from 'react';
import PropTypes from 'prop-types';

import './ButtonInput.css';

const ButtonInput = (props) => {
  const {
    onClick, value, disabled, theme,
  } = props;
  return (
    <input
      className={`KiUi-input KiUi-ButtonInput ${theme}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
      value={value}
    />
  );
};

ButtonInput.defaultProps = {
  disabled: false,
  onClick: () => null,
  theme: 'default',
  value: '',
};

ButtonInput.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'dark', 'light']),
  value: PropTypes.string,
};

export default ButtonInput;
