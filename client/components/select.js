import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'har gow', label: 'Crystal shrimp dumplings (har gow)' },
  { value: 'gai mei bao', label: 'Coconut buns (gai mei bao)' },
  { value: 'Chicken feet', label: 'Chicken feet (feng zhua)' },
];

const SelectComponent = () => <Select options={options} />;

export default SelectComponent;
