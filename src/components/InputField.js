import PropTypes from 'prop-types';
import React from 'react';

function InputField(props){
  return (
    <input type="text" 
          onChange={props.handleChange} 
          value={props.searchTerm} />
    );
}

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default InputField;