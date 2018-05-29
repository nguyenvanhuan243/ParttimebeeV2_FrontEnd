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
export default class EditJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="EditJob">
          <div className="EditJob-title">
            Edit job
          </div>
          <div className="EditJob-content">
            <div className="EditJob-form">
            </div>
            <div className="EditJob-sideBar">
              <div className="EditJob-sideBarTitle">
                Title
              </div>
              <div className="EditJob-sideBarAbstract">
                Title of the job. E.g.
                Medical Sales Executive
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

