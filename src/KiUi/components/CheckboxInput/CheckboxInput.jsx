import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxInput.css';

const CheckboxInput = (props) => {
  const {
    onChange, options, disabled, vertical, id,
    className, value,
  } = props;
  return (
    <div
      className={`KiUi-Options KiUi-CheckboxInput ${vertical ? 'KiUi-column' : ''} ${className}`.trim()}
    >
      {
        options.map((option) => (
          <label
            key={option.value}
            htmlFor={option.value}
          >
            <input
              checked={value.includes(option.value)}
              className="KiUi-input"
              disabled={disabled}
              id={option.value}
              name={id}
              onChange={onChange}
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
  onChange: () => null,
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
  value: [],
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
  value: PropTypes.arrayOf(PropTypes.string),
  vertical: PropTypes.bool,
};

export default CheckboxInput;
