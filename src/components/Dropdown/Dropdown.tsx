import React from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi';
import Select, { components } from 'react-select'

const options = [
  { value: 'View', label: 'View' },
  { value: 'Update', label: 'Update' },
  { value: 'Delete', label: 'Delete' }
]

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'var(--kuma-colors-gray-900)',
    backgroundColor: state.isSelected ? 'var(--kuma-colors-blue-900)' : 'white',
    padding: 8,
    borderRadius: 8,
    fontWeight: 700,

    ':hover': {
      backgroundColor: state.isSelected ? null : 'var(--kuma-colors-gray-100)',
    }
  }),
  placeholder: () => ({
    paddingLeft: 8,
    color: 'var(--kuma-colors-blue-800)',
    fontSize: 14
  }),
  control: () => ({
    cursor: 'pointer',
    display: 'flex',
    padding: 3,
    border: '1px solid var(--kuma-colors-gray-100)',
    borderRadius: 13,
    // none of react-select's styles are passed to <Control />
    width: 130,
    fontWeight: 700
  }),
  menu: () => ({
    marginTop: 8,
    boxShadow: ' 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08)',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: '8px 16px',
    position: 'absolute',
    zIndex: 100,
    width: '100%'
  }),
  singleValue: (provided: any, state: any) => ({
    paddingLeft: 8,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms',
    color: 'var(--kuma-colors-gray-900)'
  }),
  indicatorsContainer: () => ({
    'svg': {
      stroke: 'var(--kuma-colors-gray-900)'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  multiValue: (provided: any) => ({
    ...provided,
    alignItems: 'center',
    padding: '4px 4px 4px 12px',
    backgroundColor: 'var(--kuma-colors-blue-900)',
    color: 'white',
    borderRadius: 99
  }),
  multiValueLabel: () => ({
    color: 'white',
    fontSize: 14,
  }),
  multiValueRemove: () => ({
    cursor: 'pointer',
    marginLeft: 10,
    marginRight: 1,
    padding: 3,
    display: 'flex',
    // height: 14,
    alignItems: 'center',
    color: 'var(--kuma-colors-blue-900)',
    borderRadius: 99,
    backgroundColor: 'white',

    'svg': {
      strokeWidth: 0.01,
      width: 15,
      height: 15,
    }
  })
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiX />
    </components.DropdownIndicator>
  );
};



const Dropdown = () => {
  return (
    <Select placeholder="Actions" isMulti={false} styles={customStyles} options={options} components={{ DropdownIndicator, ClearIndicator }} />
  )
}

export default Dropdown
