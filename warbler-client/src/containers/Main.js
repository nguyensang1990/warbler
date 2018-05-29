import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser, removeError} from '../store/actions';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';

const Main = props => {
  const {authUser, error, removeError, currentUser} = props;
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route exact path='/signin' render={props => (
          <AuthForm removeError={removeError} error={error.message} onAuth={authUser} buttonText='Log In' headerText='Welcome Back' {...props} />
        )} />
        <Route exact path='/signup' render={props => (
          <AuthForm removeError={removeError} error={error.message} onAuth={authUser} signUp buttonText='Sign Up' headerText='Joint The New Social Flatform' {...props} />
        )} />
        <Route path='/users/:id/messages/new' component={withAuth(MessageForm)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  error: state.errors
});

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));
