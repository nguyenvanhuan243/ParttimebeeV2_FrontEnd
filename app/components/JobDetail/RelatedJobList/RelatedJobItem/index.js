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
import config from '../../../../../config';

export default class RelatedJobItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a className="RelatedJobItem-href" href={`${config.BASE_URL}/job-detail`}>
        <div className="RelatedJobItem">
          <div className="RelatedJobItem-container">
            <div className="RelatedJobItem-image">
            </div>
            <div className="RelatedJobItem-text">
              <div className="RelatedJobItem-title">
                JOB TITLE HERE
              </div>
              <div className="RelatedJobItem-companyName">
                Company Name Here
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
