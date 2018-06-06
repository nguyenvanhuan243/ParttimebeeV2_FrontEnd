import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
export default class PostJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="PostJob-container">
          <div className="PostJob-content">
            <div className="PostJob-title">
              Post job
            </div>
            <div className="PostJob-important">
            </div>
          </div>
          <div className="PostJob-sidebar">
            fadsfddfs
          </div>
        </div>
      </div>
    );
  }
}

