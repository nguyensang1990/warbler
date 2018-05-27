import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { setAuthToken, setCurrentUser } from '../store/actions';

import Navbar from './Navbar';
import Main from './Main';

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // prevent someone from manually tempering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='onboarding'>
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
