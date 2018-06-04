import React from 'react';
import ArrowIcon from 'components/Icons/Arrow/Loadable';
import config from '../../../../config';

const CompanyInfo = () => (
  <a className="CompanyInfo-href" href={`${config.BASE_URL}/employer-profile`}>
    <div className="CompanyInfo">
      <div className="CompanyInfo-container">
        <div className="CompanyInfo-image" />
        <div className="CompanyInfo-text">
          <div>View company info </div>
          <div>and all jobs by this employer </div>
        </div>
        <ArrowIcon />
      </div>
    </div>
  </a>
);
export default CompanyInfo;
