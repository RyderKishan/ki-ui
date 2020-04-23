import React from 'react';
import PropTypes from 'prop-types';

import './DateInput.css';

const validTypes = ['datetime-local', 'date', 'time'];

const DateInput = (props) => {
  const {
    onChange, value, id, type, readOnly, min, max,
    disabled, defaultValue, title, className,
  } = props;
  return (
    <input
      className={`KiUi KiUi-input KiUi-DateInput ${className}`.trim()}
      defaultValue={defaultValue || value}
      disabled={disabled}
      id={id}
      max={max}
      min={min}
      onChange={onChange}
      readOnly={readOnly}
      title={title}
      type={type}
    />
  );
};

DateInput.defaultProps = {
  className: '',
  defaultValue: null,
  disabled: false,
  id: null,
  onChange: null,
  max: null,
  min: null,
  readOnly: false,
  type: 'date',
  title: null,
  value: undefined,
};

DateInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  type: PropTypes.oneOf(validTypes),
  title: PropTypes.string,
  value: PropTypes.string,
};

export default DateInput;
