import React from 'react';
import ReactDOM from 'react-dom';

import {
  TextInput, CheckboxInput, DateInput,
  RadioInput, SelectInput, ButtonInput,
} from './KiUi';
import './index.css';
import * as Constants from './constants';

ReactDOM.render(
  <div className="KiUi-Examples">
    <h1>
      Exapmles of KiUi Components
    </h1>
    <div>
      <div>
        Text Input
      </div>
      <TextInput />
    </div>
    <div>
      <div>
        Checkbox Input
      </div>
      <CheckboxInput options={Constants.checkBoxOptions} />
    </div>
    <div>
      <div>
        Date Input
      </div>
      <DateInput />
    </div>
    <div>
      <div>
        Radio Input
      </div>
      <RadioInput options={Constants.radioOptions} />
    </div>
    <div>
      <div>
        Select Input
      </div>
      <SelectInput />
    </div>
    <div>
      <div>
        Button Input
      </div>
      <ButtonInput value="Submit" />
    </div>
  </div>,
  document.getElementById('app'),
);
