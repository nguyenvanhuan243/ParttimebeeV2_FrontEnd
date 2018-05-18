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
import JobItem from 'components/JobList/JobItem/Loadable';
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
export default class JobList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="JobList">
        <div className="JobList-title">
          <div className="JobList-titleText">
            Today, December 25
          </div>
        </div>
        <JobItem />
        <JobItem />
        <JobItem />
        <div className="JobList-showMore">
          <div className="JobList-showMoreIcon">
            <ShowMoreIcon />
          </div>
          <div className="JobList-showMoreText">
            SHOW 88 MORE
          </div>
        </div>
      </div>
    );
  }
}

