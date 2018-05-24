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

export default class MyJobsComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      activeGoing = false,
      activePending = false,
      activeExpired = false,
      onActive = () => {},
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
            <button id="on-going" onClick={onActive} className="">
              10 On-going jobs
            </button>
          </div>
          <div className={activePendingClassName}>
            <button id="on-pending" onClick={onActive} className="">
              1 Pending jobs
            </button>
          </div>
          <div className={activeExpiredClassName}>
            <button id="on-expired" onClick={onActive} className="">
              99 expired jobs
            </button>
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
  onActive: PropTypes.func.isRequired,
};

