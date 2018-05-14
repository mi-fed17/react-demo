/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import LoginForm from './LoginForm';
import '../App.css';

class App extends React.Component {

  state = {
    loggedIn: false,
    email: ''
  }

  logout = () => {
    this.setState({ loggedIn: false });
  }

  handleLogin = (email, password) => {
    this.setState({ loggedIn: true, email: email });
  }

  render(){
    /** Display none / display block */
    let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> You are logged in! </p>
    }
    
    return(
      <Container>
        { loggedInMessage }
        {
          !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
      </Container>
    )
  }
}

export default App;