import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from 'components/Icons/Arrow/Loadable';
import RandomString from 'random-string';
import axios from 'axios';
import DefaultAvatar from 'components/DefaultAvatar/DefaultAvatar/Loadable';
import { isMac } from '../../../utils/operatingSystem';
import config from '../../../../config';

const getUserFromJobIdUrl = `${config.API_BASE_URL}/users/show-user-with-job-id`;
export default class CompanyInfo extends PureComponent {
  constructor() {
    super();
    this.state = { user: {} };
  }

  componentWillMount() {
    axios.post(getUserFromJobIdUrl, {
      jobId: this.getJobIdFromUrl(),
    }).then(response => {
      this.setState({ user: response.data });
    });
  }

  // Get job id from url
  getJobIdFromUrl = () => (
    location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  );

  render() {
    const { user } = this.state;
    const { userId = 0 } = this.props;
    const fontWeight = isMac() ? '' : 'bold';
    const randomeString = RandomString({ length: 50 });
    return (
      <Link className="CompanyInfo-href" to={`/employer-profile/${userId}?${randomeString}`}>
        <div className="CompanyInfo">
          <div className="CompanyInfo-container">
            <div className="CompanyInfo-image">
              <DefaultAvatar defaultAvatarNumber={user.url_avatar || user.default_avatar} />
            </div>
            <div style={{ fontWeight }} className="CompanyInfo-text">
              <div>View company info </div>
              <div>and all jobs by this employer </div>
            </div>
            <ArrowIcon />
          </div>
        </div>
      </Link>
    );
  }
}
CompanyInfo.propTypes = {
  userId: PropTypes.number,
};
