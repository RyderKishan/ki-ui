import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.css';

const TextInput = (props) => {
  const {
    onBlur, onChange, value, placeholder, disabled,
    maxLength, type, defaultValue, readOnly, id, step,
    max, min, spellCheck, className, height, size, src,
  } = props;
  return (
    <input
      className={`KiUi KiUi-input KiUi-TextInput ${className}`.trim()}
      disabled={disabled}
      defaultValue={defaultValue}
      height={height}
      id={id}
      max={max}
      maxLength={maxLength}
      min={min}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      spellCheck={spellCheck}
      size={size}
      src={src}
      step={step}
      type={type}
      value={value}
    />
  );
};

TextInput.defaultProps = {
  className: '',
  defaultValue: null,
  disabled: false,
  height: null,
  id: null,
  max: null,
  maxLength: null,
  min: null,
  onBlur: null,
  onChange: null,
  placeholder: '',
  readOnly: false,
  size: null,
  src: null,
  step: null,
  spellCheck: false,
  value: undefined,
  type: 'text',
};

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  id: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.number,
  src: PropTypes.string,
  step: PropTypes.number,
  spellCheck: PropTypes.bool,
  type: PropTypes.oneOf(['color', 'email', 'file',
    'hidden', 'image', 'number', 'password', 'range',
    'search', 'tel', 'text']),
  value: PropTypes.string,
};

export default TextInput;
