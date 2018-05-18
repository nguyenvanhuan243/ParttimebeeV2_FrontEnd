/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import PostJobForm from 'components/PostJobForm/Loadable';
import { Alert } from 'reactstrap';
export default class PostJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="PostJob">
        <div className="PostJob-header">
          <Header />
        </div>
        <div className="PostJob-container">
          <div className="PostJob-editProfile">
            POSTJOB
          </div>
          <div className="PostJob-postJobAlert">
            <Alert color="danger">
              This is a danger alert — check it out!
            </Alert>
          </div>
          <div className="PostJob-postJobForm">
            <PostJobForm />
          </div>
        </div>
      </div>
    );
  }
}

