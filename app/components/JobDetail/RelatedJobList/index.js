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
import RelatedJobItem from 'components/JobDetail/RelatedJobList/RelatedJobItem/Loadable';

export default class RelatedJobList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="RelatedJobList-Title">
          RELATED JOBS
        </div>
        <div className="RelatedJobList">
          <div className="RelatedJobList-item">
            <RelatedJobItem />
          </div>
          <div className="RelatedJobList-item">
            <RelatedJobItem />
          </div>
          <div className="RelatedJobList-item">
            <RelatedJobItem />
          </div>
          <div className="RelatedJobList-item">
            <RelatedJobItem />
          </div>
          <div className="RelatedJobList-item">
            <RelatedJobItem />
          </div>
        </div>
      </div>
    );
  }
}
