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
          My Jobs
        </div>
        <div className="MyJobsComponent-content">
          <a target="_blank" href={`${config.BASE_URL}/myjobs/myjobs-on-going`}>
            <div>
              10 On-going jobs
            </div>
          </a>
          <a target="_blank" href={`${config.BASE_URL}/myjobs/myjobs-pending`}>
            <div>
              1 Pending jobs
            </div>
          </a>
          <a target="_blank" href={`${config.BASE_URL}/myjobs/myjobs-expired`}>
            <div>
              99 expired jobs
            </div>
          </a>
        </div>
      </div>
    );
  }
}

