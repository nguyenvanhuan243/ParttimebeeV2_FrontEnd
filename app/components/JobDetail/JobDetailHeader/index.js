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
export default class JobDetailHeader extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      title = 'Presentable Chinese Female Crew - KL/Selangor',
      companyName = 'Company Name',
      state = 'KUALALUMPUR',
      city = 'PUTRAJAYA',
    } = this.props;
    return (
      <div className="JobDetailHeader">
        <div className="JobDetailHeader-image">
        </div>
        <div className="JobDetailHeader-info">
          <div className="JobDetailHeader-title">
            { title }
          </div>
          <div className="JobDetailHeader-companyName">
            { companyName }
          </div>
          <div className="JobDetailHeader-address">
            <div className="JobDetailHeader-addressState">
              <div className="JobDetailHeader-addressStateText">
                { state }
              </div>
            </div>
            <div className="JobDetailHeader-addressCity">
              <div className="JobDetailHeader-addressCityText">
                { city }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobDetailHeader.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
};

