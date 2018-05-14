import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: ''
  }
  
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.email === "user@user.se" && this.state.password === "password1234"){
      this.setState({ error: 'Logged in!'});
    } else {
      this.setState({ error: "Wrong email or password!"});
    }
    
  }

  render() {
    let errorMessage = null;
    if(this.state.error){
      errorMessage = <small id="emailHelp" className="form-text text-danger">{this.state.error}</small>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleEmail}
                  value={this.state.email}
          />
          { errorMessage }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  value={this.state.password}
          />
          {errorMessage}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      );
    }
}

export default LoginForm;