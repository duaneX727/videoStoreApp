import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: {username: '', password: ''},
    errors: {}
  }
  schema = {
    username: Joi.string()
        .required()
        .email()
        .label("Username"),
    password: Joi.string()
        .required()
        .min(5)
        .label("Password")
  }
 
  doSubmit = () =>{
    // Call the server
    console.log('Submitted');
  }
  render() { 
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
             {this.renderInput('username', 'Username')}
          </div>
          <div className="form-group">
             {this.renderInput('password', 'Password', 'password')}
          </div>
          {this.renderButton('Login')}
        </form>
      </React.Fragment>  
      );
  }
}
 
export default LoginForm;