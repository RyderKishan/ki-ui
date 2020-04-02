import React from 'react';
import PropTypes from 'prop-types';

import './SelectInput.css';

const SelectInput = (props) => {
  const {
    onChange, value, options, size, disabled, emptyOption,
    placeholder, id, defaultValue, className,
  } = props;
  return (
    <select
      className={`KiUi-SelectInput KiUi-input ${className}`.trim()}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      value={value}
    >
      {
        emptyOption && (
          <option value="">{placeholder}</option>
        )
      }
      {options.map((option) => (
        <option
          disabled={option.disabled}
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </select>
  );
};

SelectInput.defaultProps = {
  className: '',
  defaultValue: null,
  disabled: false,
  emptyOption: true,
  id: null,
  onChange: null,
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
  placeholder: 'Select One...',
  size: null,
  value: undefined,
};

SelectInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  emptyOption: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'default']),
  value: PropTypes.string,
};

export default SelectInput;
