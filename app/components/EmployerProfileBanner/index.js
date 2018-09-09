import classNames from 'classnames';
import { Link } from 'react-router-dom';
import WebIcon from 'components/Icons/Web/Loadable';
import React, { PureComponent, PropTypes } from 'react';
import PhoneIcon from 'components/Icons/Phone/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import axios from 'axios';
import config from '../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
export default class EmployerProfileBanner extends PureComponent {
  constructor() {
    super();
    this.state = {
      showReadMore: false,
      shouldUpdate: false,
    };
  }

  componentWillMount() {
    axios.get(requestUrl).then((response) => {
      if (!response.data.contact_name || !response.data.company_name) {
        this.setState({
          shouldUpdate: true,
        });
      }
    });
  }

  render() {
    const {
      phone,
      email,
      website,
      address,
      companyName,
      urlAvatar = '',
      showEdit = false,
      companyDescription,
    } = this.props;

    const { showReadMore, shouldUpdate } = this.state;
    const className = classNames('EmployerProfileBanner',
      { 'EmployerProfileBanner-readMore': showReadMore }
    );
    const companyDescriptionClassNames = classNames('EmployerProfileBanner-companyDescriptionText', {
      'EmployerProfileBanner-overFlow': !showReadMore,
    });

    return (
      <div className={className}>
        <div className="EmployerProfileBanner-container">
          { !urlAvatar ?
            <div className="EmployerProfileBanner-avatar" /> :
            <img
              className="EmployerProfileBanner-avatar"
              alt="Avatar"
              src={urlAvatar}
            />
          }
          { shouldUpdate ?
            <div className="EmployerProfileBanner-shouldUpdate">
              <div className="EmployerProfileBanner-welcomeText">
                Welcome to Parttime Bee!
              </div>
              <div className="EmployerProfileBanner-abstractText">
                In order to post your first job, you must add your company details.
              </div>
              <Link to={'/myprofile/edit-profile'} className="EmployerProfileBanner-link">
                <div className="EmployerProfileBanner-addNow">
                  <div className="EmployerProfileBanner-addNowText">
                    ADD NOW
                  </div>
                </div>
              </Link>
            </div> :
            <div className="EmployerProfileBanner-contentContainer">
              <div className="EmployerProfileBanner-title">
                { companyName && companyName.toUpperCase() }
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
                COMPANY DESCRIPTION
              </div>
              <div className={companyDescriptionClassNames}>
                <div dangerouslySetInnerHTML={{ __html: companyDescription }} />
                { !showReadMore && <button
                  onClick={() => this.setState({ showReadMore: true })}
                  className="EmployerProfileBanner-readMoreButton"
                >
                  Read more
                </button> }
              </div>
            </div>}
          { showEdit && !shouldUpdate &&
            <Link className="EmployerProfileBanner-hrefText" to={'/myprofile/edit-profile'}>
              <div className="EmployerProfileBanner-editButton">
                <div className="EmployerProfileBanner-editButtonText">
                  Edit
                </div>
              </div>
            </Link> }
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
  urlAvatar: PropTypes.string,
};

