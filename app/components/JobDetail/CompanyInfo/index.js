import React, { PureComponent } from 'react';
import config from '../../../../config';
export default class CompanyInfo extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a className="CompanyInfo-href" href={`${config.BASE_URL}/employer-profile`}>
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

