import React, { PureComponent, PropTypes } from 'react';
import PhoneIcon from 'components/Icons/Phone/Loadable';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import WebIcon from 'components/Icons/Web/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
import classNames from 'classnames';
import config from '../../../config';
export default class EmployerProfileBanner extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showReadMore: false,
    };
  }
  handleReadMore() {
    this.setState({
      showReadMore: !this.state.showReadMore,
    });
    return false;
  }
  render() {
    const {
      showReadMore,
    } = this.state;
    const {
      showEdit = false,
      companyName,
      phone,
      email,
      website,
      address,
      companyDescription,
    } = this.props;
    const className = classNames('EmployerProfileBanner',
      { 'EmployerProfileBanner-readMore': showReadMore }
    );
    return (
      <div className={className}>
        <div className="EmployerProfileBanner-container">
          <div className="EmployerProfileBanner-avatar">
          </div>
          <div className="EmployerProfileBanner-contentContainer">
            <div className="EmployerProfileBanner-title">
              { companyName }
            </div>
            <div className="EmployerProfileBanner-infoContainer">
              <div className="EmployerProfileBanner-phoneContainer">
                <PhoneIcon />
                <div className="EmployerProfileBanner-phoneText">
                  { phone }
                </div>
              </div>
              <div className="EmployerProfileBanner-mailContainer">
                <WhiteEmailIcon />
                <div className="EmployerProfileBanner-mailText">
                  { email }
                </div>
              </div>
              <div className="EmployerProfileBanner-webContainer">
                <WebIcon />
                <div className="EmployerProfileBanner-webText">
                  { website }
                </div>
              </div>
            </div>
            <div className="EmployerProfileBanner-addressContainer">
              <AddressIcon />
              <div className="EmployerProfileBanner-addressText">
                { address }
              </div>
            </div>
            <div className="EmployerProfileBanner-separate">
            </div>
            <div className="EmployerProfileBanner-companyDescription">
              Company Description
            </div>
            <div className="EmployerProfileBanner-companyDescriptionText">
              { companyDescription }
            </div>
          </div>
          { showEdit ?
            <a className="EmployerProfileBanner-hrefText" href={`${config.BASE_URL}/myprofile/edit-profile`}>
              <div className="EmployerProfileBanner-editButton">
                <div className="EmployerProfileBanner-editButtonText">
                  Edit
                </div>
              </div>
            </a> : null }
        </div>
      </div>
    );
  }
}

EmployerProfileBanner.propTypes = {
  showEdit: PropTypes.bool,
  companyName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.string,
  companyDescription: PropTypes.string,
};

