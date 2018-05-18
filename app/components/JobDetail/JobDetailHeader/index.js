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
export default class JobDetailHeader extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="JobDetailHeader">
        <div className="JobDetailHeader-image">
        </div>
        <div className="JobDetailHeader-info">
          <div className="JobDetailHeader-title">
            Presentable Chinese Female Crew - KL/Selangor
          </div>
          <div className="JobDetailHeader-companyName">
            Company Name
          </div>
          <div className="JobDetailHeader-address">
            <div className="JobDetailHeader-addressState">
              <div className="JobDetailHeader-addressStateText">
                KUALALUMPUR
              </div>
            </div>
            <div className="JobDetailHeader-addressCity">
              <div className="JobDetailHeader-addressCityText">
                PUTRAJAYA
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

