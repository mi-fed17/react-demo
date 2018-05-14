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

  render() {
    console.log(this.state);
    return (
      <form>
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
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      );
    }
}

export default LoginForm;