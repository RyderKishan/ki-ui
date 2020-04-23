const props = {
  formValues: {
    'basic-details': {
      cty: 'vpt',
      zip: '600069',
      sAddress: 'No. 35, Sathyamoorthy Naga',
    },
    'ad-details': {
      fName: 'Balkishan',
      lName: '',
      als: '',
      nm: '123412',
    },
  },
  metaData: [
    {
      elements: [
        {
          id: 'fName',
          name: 'First Name',
          type: 'TextInput',
        },
        {
          id: 'range',
          name: 'Range Name',
          type: 'TextInput',
          subType: 'range',
        },
        {
          id: 'lName',
          name: 'Last Name',
          type: 'TextInput',
          placeholder: 'The last name',
        },
        {
          id: 'als',
          name: 'Also Knows As',
          type: 'TextInput',
          defaultValue: 'Testing',
          helperText: 'Helper Text',
          errorText: 'Should Be a Text',
          regex: {},
        },
        {
          id: 'nm',
          error: true,
          errorText: 'Error Text',
          name: 'Number Test',
          type: 'TextInput',
          subType: 'number',
        },
      ],
      groupName: 'Basic Details',
      groupId: 'basic-details',
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
          disabled: true,
        },
        {
          id: 'cty',
          name: 'City',
          type: 'SelectInput',
          defaultValue: 'vpt',
          options: [
            {
              label: 'SVKS',
              value: 'sv',
            },
            {
              label: 'VNR',
              value: 'vpt',
            },
          ],
        },
        {
          id: 'state',
          name: 'State',
          disabled: true,
          type: 'SelectInput',
          options: [
            {
              label: 'TX',
              value: 'tx',
            },
            {
              label: 'NY',
              value: 'ny',
            },
            {
              label: 'AU',
              value: 'au',
            },
          ],
        },
        {
          id: 'zip',
          name: 'Zip',
          type: 'TextInput',
        },
      ],
      groupName: 'Advanced Details',
      groupId: 'ad-details',
    },
  ],
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
  props,
  checkBoxOptions,
  radioOptions,
};
