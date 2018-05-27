import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';
import { logOut } from '../store/actions';

class Navbar extends Component {
  logOut = e => {
    e.preventDefault();
    this.props.logOut();
  }
  render () {
    return (
      <nav className='navbar navbar-expand'>
        <div className='container-fluid'>
          <div>
            <Link to='/' className='navbar-brand'>
              <img src={Logo} alt='Home' />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`} >New Message</Link>
              </li>
              <li>
                <a onClick={this.logOut}>Log Out</a>
              </li>
            </ul>
          ) : (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/signin'>Sign In</Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, {logOut})(Navbar);
