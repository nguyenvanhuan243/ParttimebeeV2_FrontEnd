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
import config from '../../../config';
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
          <div className="MyJobsComponent-textContainer">
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-on-going`}>
              10 On-going jobs
            </a>
          </div>
          <div className="MyJobsComponent-textContainer">
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-pending`}>
              1 Pending jobs
            </a>
          </div>
          <div className="MyJobsComponent-textContainer">
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-expired`}>
              99 expired jobs
            </a>
          </div>
        </div>
      </div>
    );
  }
}

