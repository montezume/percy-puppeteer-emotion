import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

const options = [
  { value: 'hargow', label: 'Crystal shrimp dumplings (har gow)' },
  { value: 'gaimeibao', label: 'Coconut buns (gai mei bao)' },
  { value: 'fengzhua', label: 'Chicken feet (feng zhua)' },
];

const loadOptions = () => Promise.resolve(options);

const SelectComponent = props => (
  <AsyncSelect
    id="select-input"
    value={props.value}
    defaultValue={options[0]}
    searchable={true}
    onChange={props.onChange}
    loadOptions={loadOptions}
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
