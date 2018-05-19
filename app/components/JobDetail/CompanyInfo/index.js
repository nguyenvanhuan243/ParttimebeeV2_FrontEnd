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
export default class CompanyInfo extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a className="CompanyInfo-href" href="/employer-profile" target="_blank">
        <div className="CompanyInfo">
          <div className="CompanyInfo-container">
            <div className="CompanyInfo-image">
            </div>
            <div className="CompanyInfo-text">
              <div className="CompanyInfo-text1">
                View company info
              </div>
              <div className="CompanyInfo-text2">
                and all jobs by this employe
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

