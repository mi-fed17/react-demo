import React from 'react';

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
        <h1>Please login 🤡</h1>
      </header>
    )
  }
}

export default Header;