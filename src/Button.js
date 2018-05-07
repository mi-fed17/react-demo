import React from 'react';

function Button(props){
  if(props.primary){
    return <button onClick={props.onClick} className="btn btn-primary"> Click me </button>
  }
  if(props.secondary){
    return <button onClick={props.onClick} className="btn btn-secondary"> Click me </button>
  }
  return <button onClick={props.onClick} className="btn"> Click me </button>
}

export default Button;