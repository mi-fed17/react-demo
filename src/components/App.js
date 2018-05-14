/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import LoginForm from './LoginForm';
import '../App.css';

class App extends React.Component {

  render(){
    return(
      <Container>
        <LoginForm />
      </Container>
    )
  }
}

export default App;