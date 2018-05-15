import PropTypes from 'prop-types';
import React from 'react';

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

function InputField(props){
  return (
    <input type="text" 
          onChange={props.handleChange} 
          value={props.searchTerm} />
    );
}

export default InputField;