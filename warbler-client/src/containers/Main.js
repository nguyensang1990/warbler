import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions';

const Main = props => {
  const {authUser} = props
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props => <Homepage {...props} />} />
        <Route exact path='/signin' render={props => (
          <AuthForm onAuth={authUser} buttonText='Log In' headerText='Welcome Back' {...props} />
        )} />
        <Route exact path='/signup' render={props => (
          <AuthForm onAuth={authUser} signUp buttonText='Sign Up' headerText='Joint The New Social Flatform' {...props} />
        )} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default withRouter(connect(mapStateToProps,{authUser})(Main));
