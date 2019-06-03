import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

const optionStyles = props => base => {
  return {
    ...base,
    color: props.isFunky ? 'pink' : 'black',
    paddingLeft: '8px',
    paddingRight: '8px',
  };
};

const createSelectStyles = props => ({
  option: optionStyles(props),
});

const options = [
  { value: 'hargow', label: 'Crystal shrimp dumplings (har gow)' },
  { value: 'gaimeibao', label: 'Coconut buns (gai mei bao)' },
  { value: 'fengzhua', label: 'Chicken feet (feng zhua)' },
];

const loadOptions = () => Promise.resolve(options);

const SelectComponent = props => (
  <AsyncSelect
    id="select-input"
    styles={createSelectStyles(props)}
    value={props.value}
    defaultValue={options[0]}
    searchable={true}
    defaultOptions={false}
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
  // lol
  isFunky: PropTypes.bool.isRequired,
};

SelectComponent.defaultProps = {
  isFunky: true,
};

export default SelectComponent;
