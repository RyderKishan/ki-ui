const metaData = [
  {
    elements: [
      {
        id: 'fName',
        name: 'First Name',
        type: 'TextInput',
        placeholder: 'Full name without spaces',
      },
      {
        id: 'lName',
        name: 'Last Name',
        type: 'TextInput',
        placeholder: 'The family name or initials',
      },
      {
        id: 'als',
        name: 'Also Knows As',
        type: 'TextInput',
        // defaultValue: 'Testing',
        helperText: 'Any name by which you are called',
        errorText: 'Should Be a Text',
      },
      {
        id: 'nm',
        error: true,
        errorText: 'Error Text',
        name: 'Number Test',
        type: 'TextInput',
        subType: 'number',
      },
      {
        id: 'maritialStatus',
        name: 'Maritial Status',
        type: 'CheckboxInput',
        options: [
          {
            label: 'Single',
            value: 'sin',
          },
          {
            label: 'Married',
            value: 'mar',
          },
          {
            label: 'Divorced',
            value: 'div',
          },
        ],
      },
      {
        id: 'gender',
        type: 'RadioInput',
        name: 'Gender',
        options: [
          {
            label: 'Male',
            value: 'm',
          },
          {
            label: 'Female',
            value: 'f',
          },
          {
            label: 'Other',
            value: 'o',
            disabled: true,
          },
        ],
      },
      {
        id: 'dateOfBirth',
        name: 'Date of Birth',
        type: 'DateInput',
      },
    ],
    groupName: 'Personal Details',
    groupId: 'personalDetails',
  },
  {
    elements: [
      {
        id: 'sAddress',
        name: 'Street Adress',
        type: 'TextInput',
      },
      {
        id: 'city',
        name: 'City',
        type: 'TextInput',
        // disabled: true,
      },
      {
        id: 'state',
        name: 'State',
        // disabled: true,
        type: 'SelectInput',
        options: [
          {
            label: 'Tamil Nadu',
            value: 'tn',
          },
          {
            label: 'Kerala',
            value: 'kl',
          },
          {
            label: 'Andhra Pradesh',
            value: 'ap',
          },
          {
            label: 'Karnataka',
            value: 'ka',
            disabled: true,
          },
        ],
      },
      {
        id: 'zip',
        name: 'Zip Code',
        type: 'TextInput',
      },
    ],
    groupName: 'Location Details',
    groupId: 'location-details',
  },
];

const metaData2 = [
  {
    elements: [
      {
        id: 'fName',
        name: 'First Name',
        type: 'TextInput',
        placeholder: 'Full name without spaces',
      },
      {
        id: 'lName',
        name: 'Last Name',
        type: 'TextInput',
        placeholder: 'The family name or initials',
      },
      {
        id: 'als',
        name: 'Also Knows As',
        type: 'TextInput',
        defaultValue: 'Testing',
        helperText: 'Any name by which you are called',
        errorText: 'Should Be a Text',
      },
      {
        id: 'nm',
        error: true,
        errorText: 'Error Text',
        name: 'Number Test',
        type: 'TextInput',
        subType: 'number',
      },
      {
        id: 'dateOfBirth',
        name: 'Date of Birth',
        type: 'DateInput',
      },
    ],
    groupName: 'Personal Details',
    groupId: 'personalDetails',
  },
];

const formValues = {
  personalDetails: {
    nm: '626189',
    fName: 'Bal Kishan',
    lName: 'S',
    als: 'Kishan',
    maritialStatus: ['sin'],
    gender: 'm',
    dateOfBirth: '1996-10-31T18:30:00.000Z',
  },
  'location-details': {
    sAddress: '819 PKN ROAD',
    city: 'Sivakasi',
    state: 'tn',
    zip: '626189',
  },
};

const checkBoxOptions = [
  {
    label: 'Non-Intervivos Trusts',
    value: 'nit',
  },
  {
    label: 'Trusts Test',
    value: 'tt',
    disabled: true,
  },
  {
    label: 'Authorized Sign of Non-Intervivos Trusts',
    value: 'sign',
  },
  {
    label: 'Have a blast',
    value: 'blast',
  },
];

const radioOptions = [
  {
    label: 'Need to assign a new value',
    value: 'ntaanv',
  },
  {
    label: 'Testing for the disabled',
    value: 'tftd',
    disabled: true,
  },
  {
    label: 'Authorized Signature',
    value: 'as',
  },
  {
    label: 'Blast of Knowledge',
    value: 'bok',
  },
];

export {
  metaData,
  metaData2,
  formValues,
  checkBoxOptions,
  radioOptions,
};
