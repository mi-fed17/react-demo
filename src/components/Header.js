import PropTypes from 'prop-types';
import React from 'react';

Header.propTypes = {
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

function Header(props){
  if(props.email){
    return(
      <header>
        <h1>{ props.email }</h1>
        <button onClick={props.logout}>
          Logout
        </button>
      </header>
    )
  } else {
    return (
      <header>
        <h1>Please login 
          <span role="img" aria-label="clown"> 🤡 </span>
          </h1>
      </header>
    )
  }
}

export default Header;