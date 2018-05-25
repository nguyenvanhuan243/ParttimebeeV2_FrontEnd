import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
export default class EditJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EditJob">
        <div className="EditJob-header">
          <Header />
        </div>
      </div>
    );
  }
}

