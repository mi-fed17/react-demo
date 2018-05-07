import React from 'react';

class Form extends React.Component {
  state = {
    username: '',
    password: '',
    error: '',
    passwordError : '',
    userNameError: ''
  }

  updateUsername = () => {

  }
  updatePassword = () => {

  }

  onSubmit = () => {

  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
      <input type="text"/>
      <input type="text"/>
      </form>
    )
  }
}