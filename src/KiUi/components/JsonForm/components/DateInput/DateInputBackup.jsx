import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import './DateInput.css';

const formats = {
  date: 'YYYY-MM-DD',
  'datetime-local': 'YYYY-MM-DDTHH:mm',
  time: 'HH:mm',
};

const validTypes = ['datetime-local', 'date', 'time'];

const DateInput = (props) => {
  const {
    onChange, value, id, type, readOnly,
    disabled, defaultValue, title, className,
  } = props;
  let dt;
  switch (type) {
    case 'date':
    case 'datetime-local':
      dt = moment(value).format(formats[type]);
      break;
    case 'time':
      dt = value;
      break;
    default: {
      dt = '';
    }
  }
  return (
    <input
      className={`KiUi-input KiUi-DateInput ${className}`.trim()}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      onChange={(e) => onChange(type === 'time'
        ? e.target.value : moment(e.target.value).toISOString())}
      readOnly={readOnly}
      title={title}
      type={type}
      // value={dt}
    />
  );
};

DateInput.defaultProps = {
  className: '',
  defaultValue: '',
  disabled: false,
  id: null,
  onChange: null,
  readOnly: false,
  type: 'date',
  title: '',
  value: null,
};

DateInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  type: PropTypes.oneOf(validTypes),
  title: PropTypes.string,
  value: PropTypes.string,
};

export default DateInput;
