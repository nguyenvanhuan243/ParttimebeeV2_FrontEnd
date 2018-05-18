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
import LoadingJobsItem from 'components/LoadingJobs/LoadingJobsList/LoadingJobsItem/Loadable';
export default class LoadingJobsList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="LoadingJobsList">
        <LoadingJobsItem />
        <LoadingJobsItem />
        <LoadingJobsItem />
      </div>
    );
  }
}

