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
export default class MyJobsDeleteConfirmationToastBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsDeleteConfirmationToastBox">
        <div className="MyJobsDeleteConfirmationToastBox-header">
          <Header />
        </div>
      </div>
    );
  }
}

