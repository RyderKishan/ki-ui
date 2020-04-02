import React from 'react';
import ReactDOM from 'react-dom';

import {
  TextInput, CheckboxInput, DateInput,
  RadioInput, SelectInput, ButtonInput,
} from './KiUi';
// import * as Constants from './constants';

ReactDOM.render(
  <div>
    <TextInput />
    <br />
    <DateInput />
    <br />
    <SelectInput />
    <br />
    <CheckboxInput />
    <br />
    <RadioInput />
    <br />
    <ButtonInput value="Nemo" />
  </div>,
  document.getElementById('app'),
);
