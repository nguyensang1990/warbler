import React, { Component } from 'react';

class AuthForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      userImage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => console.log('Log in'))
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {
    const {email, username, password, userImage} = this.state;
    const {buttonText, headerText, signUp} = this.props;
    return (
      <div>
        <div className='row justify-content-md-center text-center' >
          <div className='col-md-6' >
            <form onSubmit={this.handleSubmit} >
              <h2>{headerText}</h2>
              <label htmlFor='email' >Email:</label>
              <input className='form-control' id='email' name='email' type='email' value={email} onChange={this.handleChange} />
              <label htmlFor='password' >Password:</label>
              <input className='form-control' id='password' name='password' type='password' value={password} onChange={this.handleChange} />
              {signUp && (
                <div>
                  <label htmlFor='username' >Username:</label>
                  <input className='form-control' id='username' name='username' type='username' value={username} onChange={this.handleChange} />
                  <label htmlFor='userImage' >Profile Image:</label>
                  <input className='form-control' id='userImage' name='userImage' type='text' value={userImage} onChange={this.handleChange} />
                </div>
              )}
              <button type='submit' className='btn btn-primary btn-block btn-lg'>{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
