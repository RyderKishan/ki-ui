import React from 'react';
import PropTypes from 'prop-types';

import './RadioInput.css';

const RadioInput = (props) => {
  const {
    onChange, value, id, options, disabled, vertical,
    className,
  } = props;
  return (
    <div
      className={`KiUi-Options KiUi-RadioInput ${vertical ? 'KiUi-column' : ''} ${className}`.trim()}
    >
      {
        options.map((option) => (
          <label
            key={option.value}
            htmlFor={`KiUi-ri-${option.value}`}
          >
            <input
              checked={value === option.value}
              className="KiUi-input"
              disabled={disabled}
              id={`KiUi-ri-${option.value}`}
              name={id}
              onChange={onChange}
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
  className: '',
  disabled: false,
  id: null,
  onChange: () => { },
  options: [
    {
      label: 'Authorized Sign of Non-Intervivos Trusts',
      value: 'sign',
    },
    {
      label: 'Non-Intervivos Trusts',
      value: 'nit',
    },
    {
      label: 'Trusts Test',
      value: 'tt',
      disabled: true,
    },
  ],
  value: '',
  vertical: false,
};

RadioInput.propTypes = {
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
  value: PropTypes.string,
  vertical: PropTypes.bool,
};

export default RadioInput;
