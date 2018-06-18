import React, { PureComponent, PropTypes } from 'react';
import ArrowIcon from 'components/Icons/Arrow/Loadable';
import config from '../../../../config';

export default class CompanyInfo extends PureComponent {
  render() {
    const {
      userId = 0,
    } = this.props;
    return (
      <a className="CompanyInfo-href" href={`${config.BASE_URL}/employer-profile/${userId}`}>
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
  }
}
CompanyInfo.propTypes = {
  userId: PropTypes.number,
};
