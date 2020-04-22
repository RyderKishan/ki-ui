/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './OrderingInput.css';

let dragSrcEl = null;

const OrderingInput = () => {
  const [list, setList] = useState([]);

  const onDragStart = (event) => {
    dragSrcEl = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
  };

  const onDragEnd = (event) => {
    event.target.classList.remove('drag');
    event.target.classList.remove('over');
  };

  const onDrop = (event) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (dragSrcEl !== event.target) {
      event.target.parentElement.removeChild(dragSrcEl);
      dragSrcEl.classList.remove('drag');
      event.target.insertAdjacentElement('afterend', dragSrcEl);
      event.target.classList.remove('over');
    }
    event.preventDefault();
    return false;
  };

  const onDragOver = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
  };

  const onDragEnter = (event) => {
    event.target.classList.add('over');
  };

  const onDragLeave = (event) => {
    event.target.classList.remove('over');
  };

  return (
    <div className="OrderingInput">
      {
        list.map((item, index) => (
          <div
            className="listItem"
            draggable
            key={item.id}
            data-id={item.id}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={{
              animationDelay: `${index * 0}s`,
            }}
          >
            {item.name}
          </div>
        ))
      }
    </div>
  );
};

// OrderingInput.defaultProps = {
//   disabled: false,
//   onClick: () => null,
//   theme: 'default',
//   value: '',
// };

// OrderingInput.propTypes = {
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   theme: PropTypes.oneOf(['default', 'dark', 'light']),
//   value: PropTypes.string,
// };

export default OrderingInput;
