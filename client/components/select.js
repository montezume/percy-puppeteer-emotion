import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'hargow', label: 'Crystal shrimp dumplings (har gow)' },
  { value: 'gaimeibao', label: 'Coconut buns (gai mei bao)' },
  { value: 'fengzhua', label: 'Chicken feet (feng zhua)' },
];

const SelectComponent = props => (
  <Select
    value={props.value}
    defaultValue={options[0]}
    options={options}
    onChange={props.onChange}
  />
);

SelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default SelectComponent;
