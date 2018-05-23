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

import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import config from '../../../config';

export default class MyJobsComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      activeGoing = false,
      activePending = false,
      activeExpired = false,
    } = this.props;

    const activeGoingClassName = classNames('MyJobsComponent-textContainer',
      { 'MyJobsComponent-active': activeGoing }
    );
    const activePendingClassName = classNames('MyJobsComponent-textContainer',
      { 'MyJobsComponent-active': activePending }
    );
    const activeExpiredClassName = classNames('MyJobsComponent-textContainer',
      { 'MyJobsComponent-active': activeExpired }
    );
    return (
      <div className="MyJobsComponent-container">
        <div className="MyJobsComponent-title">
          <span className="MyJobsComponent-titleText">
            My Jobs
          </span>
        </div>
        <div className="MyJobsComponent-content">
          <div className={activeGoingClassName}>
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-on-going`}>
              10 On-going jobs
            </a>
          </div>
          <div className={activePendingClassName}>
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-pending`}>
              1 Pending jobs
            </a>
          </div>
          <div className={activeExpiredClassName}>
            <a className="MyJobsComponent-text" href={`${config.BASE_URL}/myjobs/myjobs-expired`}>
              99 expired jobs
            </a>
          </div>
        </div>
      </div>
    );
  }
}

MyJobsComponent.propTypes = {
  activeGoing: PropTypes.bool,
  activePending: PropTypes.bool,
  activeExpired: PropTypes.bool,
};

