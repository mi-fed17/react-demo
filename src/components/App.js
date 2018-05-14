/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import LoginForm from './LoginForm';
import '../App.css';

class App extends React.Component {

  /**
   * <App /> is in charge of handling the "global" state. This state
   * will probably be used by the entire app
   */
  state = {
    loggedIn: false,
    email: ''
  }

  logout = () => {
    this.setState({ loggedIn: false });
  }

  /**
   * This function recieves 'email' and 'password' from
   * <LoginForm />. These parameters is state from the login form
   * sent up. This is the only way to send state up the component tree
   */
  handleLogin = (email, password) => {
    this.setState({ loggedIn: true, email: email });
  }

  render(){
    /** Display none === null / display block  */
    let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> You are logged in! </p>
    }
    
    return(
      <Container>
        { loggedInMessage }
        {
          /**
           * This is a shorthand for displaying or hiding a component,
           * if 'loggedIn' is false the next part of the if-statement
           * cannot continue and the component will not show. This is the same as 
           * saying true && true or false && false. Both must be true for the
           * component to show.
           */
          !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
      </Container>
    )
  }
}

export default App;