import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './RadioInput.css';

const RadioInput = (props) => {
  const {
    onChange, value, id, options, disabled, vertical,
    className, readOnly, defaultValue,
  } = props;
  const [localValue, setLocalValue] = useState(defaultValue);
  const onChangeHandler = (event) => {
    if (readOnly) return;
    const { value: fieldId } = event.target;
    onChange(fieldId);
    setLocalValue(fieldId);
  };
  const checkedValue = value || localValue;
  return (
    <div
      className={`KiUi KiUi-RadioInput ${vertical ? 'vertical' : ''} ${className}`.trim()}
    >
      {
        options.map((option) => (
          <label
            key={option.value}
            htmlFor={`KiUi-ri-${option.value}`}
            disabled={option.disabled || disabled}
          >
            <input
              defaultChecked={checkedValue === option.value}
              className="KiUi-input"
              disabled={option.disabled || disabled}
              id={`KiUi-ri-${option.value}`}
              name={id}
              onChange={onChangeHandler}
              type="radio"
              value={option.value}
            />
            {option.label}
          </label>
        ))
      }
    </div>

  );
};

RadioInput.defaultProps = {
  defaultValue: undefined,
  className: '',
  disabled: false,
  readOnly: false,
  id: null,
  onChange: () => null,
  options: [],
  value: undefined,
  vertical: false,
};

RadioInput.propTypes = {
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.string,
  vertical: PropTypes.bool,
};

export default RadioInput;
