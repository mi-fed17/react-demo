import React from 'react';

function InputField(props){
  return (<input type="text" onChange={props.handleChange} value={props.searchTerm} />);
}

export default InputField;