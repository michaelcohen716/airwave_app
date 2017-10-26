import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import ShowcaseComponent from './carousel/showcase_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionModal from './session_modal';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LogInContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';


const App = ({ modal, closeModal }) => {
  return (
    <div>
      <NavBarContainer />
      <ShowcaseComponent />
      <SessionModal component={modal === "login" ? LogInContainer : SignUpContainer}
        modal={modal}
        closeModal={closeModal} />


    </div>
  );
};

const mapStateToProps = ({ ui: {modal }}) => {
  return {
    modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
