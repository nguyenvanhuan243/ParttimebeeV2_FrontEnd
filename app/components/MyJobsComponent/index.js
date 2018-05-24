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

import React, { PureComponent } from 'react';
import Item from 'components/MyJobsComponent/Item/Loadable';

export default class MyJobsComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsComponent-container">
        <div className="MyJobsComponent-title">
          <span className="MyJobsComponent-titleText">
            My Jobs
          </span>
        </div>
        <div className="MyJobsComponent-content">
          <Item />
          <Item text="1 Pending job" />
          <Item text="99 Expired jobs" />
        </div>
      </div>
    );
  }
}
