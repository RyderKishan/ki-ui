import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './CheckboxInput.css';

const CheckboxInput = (props) => {
  const {
    onChange, options, disabled, vertical, id,
    className, value,
  } = props;
  const [localValue, setLocalValue] = useState({});
  const onChangeHandler = (event) => {
    const { value: fieldId, checked } = event.target;
    const newValue = { ...(value === undefined ? localValue : value) };
    newValue[fieldId] = checked;
    if (value === undefined) {
      setLocalValue(newValue);
      return;
    }
    onChange(newValue);
  };
  const checkedValue = value || localValue;
  return (
    <div
      className={`Ki-Ui KiUi-CheckboxInput ${vertical ? 'ci-vertical' : ''} ${className}`.trim()}
    >
      {
        options.map((option) => (
          <label
            key={option.value}
            htmlFor={`KiUi-ci-${option.value}`}
            disabled={option.disabled || disabled}
          >
            <input
              checked={checkedValue && checkedValue[option.value] === undefined
                ? false : checkedValue && checkedValue[option.value]}
              className="KiUi-input"
              disabled={option.disabled || disabled}
              id={`KiUi-ci-${option.value}`}
              name={id}
              onChange={onChangeHandler}
              type="checkbox"
              value={option.value}
            />
            {option.label}
          </label>
        ))
      }
    </div>
  );
};

CheckboxInput.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  onChange: null,
  options: [],
  value: undefined,
  vertical: true,
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.shape({}),
  vertical: PropTypes.bool,
};

export default CheckboxInput;
