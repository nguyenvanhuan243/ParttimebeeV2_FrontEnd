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

