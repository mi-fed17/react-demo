import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
  }

  handleChange = (event) => {
    /** This means that you have to have a "name"-attribute */
    this.setState({ [event.target.name] : event.target.value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
    if (this.state.password.length < 6) {
      this.setState({ error: "Password too short" });
    } else {
      this.setState({ error: '' });
    }
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.email === "user@user.se" && this.state.password === "password1234"){
      this.props.handleLogin(this.state.email, this.state.password);
    } else {
      this.setState({ error: "Wrong email or password!" });
    }
    
  }

  render() {
    let errorMessage = null;
    if(this.state.error){
      errorMessage = <small id="emailHelp" className="form-text text-danger">{this.state.error}</small>;
    }
    let errorClass = 'form-group';
    if(this.state.error){
      errorClass = "form-group has-danger";
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={ errorClass }>
          <label htmlFor="email">Email address</label>
          <input 
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleEmail}
                  value={this.state.email}
          />
          {
            /** This will display either null or <small> depending on this.state.error */
          }
          { errorMessage }
        </div>
        <div className={ errorClass }>
          <label htmlFor="password">Password</label>
          <input 
                  type="password"
                  className="form-control is-invalid"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  value={this.state.password}
          />
          {
            /** This will display either null or <small> depending on this.state.error */
          }
          {errorMessage}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      );
    }
}

export default LoginForm;