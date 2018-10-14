import classNames from 'classnames';
import { Link } from 'react-router-dom';
import WebIcon from 'components/Icons/Web/Loadable';
import React, { PureComponent, PropTypes } from 'react';
import PhoneIcon from 'components/Icons/Phone/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
import Mailto from 'react-mailto';
import { isEmpty } from 'lodash';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import DefaultAvatar from 'components/DefaultAvatar/DefaultAvatar/Loadable';
import axios from 'axios';
import { isMac } from '../../utils/operatingSystem';
import config from '../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
const DEFAULT_AVATAR_SIZE = '140px';
export default class EmployerProfileBanner extends PureComponent {
  constructor() {
    super();
    this.state = {
      showReadMore: false,
      shouldUpdate: false,
      user: {},
    };
  }

  componentWillMount() {
    axios.get(requestUrl).then(response => {
      if (!response.data.contact_name || !response.data.company_name) {
        this.setState({
          shouldUpdate: true,
        });
      }
    });
    axios.get(requestUrl).then(response => {
      this.setState({ user: response.data });
    });
  }

  getDefaultAvatar = user => (
    <DefaultAvatar
      defaultAvatarNumber={user.default_avatar}
      avatarWidth={DEFAULT_AVATAR_SIZE}
      avatarHeight={DEFAULT_AVATAR_SIZE}
    />
  );

  render() {
    const {
      phone,
      email = '',
      website,
      address,
      companyName,
      showEdit = false,
      companyDescription,
    } = this.props;

    const { showReadMore, shouldUpdate, user } = this.state;
    const className = classNames('EmployerProfileBanner',
      { 'EmployerProfileBanner-readMore': showReadMore }
    );
    const companyDescriptionClassNames = classNames('EmployerProfileBanner-companyDescriptionText', {
      'EmployerProfileBanner-overFlow': !showReadMore,
      'EmployerProfileBanner-readMoreShow': !showReadMore,
    });
    if (!isEmpty(document.getElementsByClassName('public-DraftStyleDefault-block'))) {
      const element = document && document.getElementsByClassName('public-DraftStyleDefault-block')[1];
      if (element) {
        element.classList.add('EmployerProfileBanner-readMoreShow');
      }
    }

    return (
      <div className={className}>
        <div className="EmployerProfileBanner-container">
          { !user.url_avatar ?
            <div className="EmployerProfileBanner-defaultAvatar">
              { this.getDefaultAvatar(user) }
            </div> :
            <img
              className="EmployerProfileBanner-avatar"
              alt="Avatar"
              src={user.url_avatar}
            />
          }
          { (shouldUpdate && localStorage.currentUser) ?
            <div className="EmployerProfileBanner-shouldUpdate">
              <div className="EmployerProfileBanner-welcomeText">
                Welcome to Parttime Bee!
              </div>
              <div className="EmployerProfileBanner-abstractText">
                In order to post your first job, you must add your company details.
              </div>
              <Link to={'/myprofile/edit-profile'} className="EmployerProfileBanner-link">
                <div className="EmployerProfileBanner-addNow">
                  <div style={{ fontWeight: isMac() ? '500' : '700' }} className="EmployerProfileBanner-addNowText">
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
                { phone &&
                  <div className="EmployerProfileBanner-phoneContainer">
                    <PhoneIcon />
                    <div className="EmployerProfileBanner-phoneText">
                      { phone }
                    </div>
                  </div>
                }
                <div className="EmployerProfileBanner-mailContainer">
                  <WhiteEmailIcon />
                  <div className="EmployerProfileBanner-mailText">
                    <Mailto className="EmployerProfileBanner-emailLink" email={email}>
                      { email }
                    </Mailto>
                  </div>
                </div>
                { website &&
                  <div className="EmployerProfileBanner-webContainer">
                    <WebIcon />
                    <div className="EmployerProfileBanner-webText">
                      <Link className="EmployerProfileBanner-websiteLink" to={website} target={'_blank'}>
                        { website }
                      </Link>
                    </div>
                  </div>
                }
              </div>
              { address &&
                <div className="EmployerProfileBanner-addressContainer">
                  <AddressIcon />
                  <div className="EmployerProfileBanner-addressText">
                    { address }
                  </div>
                </div>
              }
              <div className="EmployerProfileBanner-separate">
              </div>
              { companyDescription && companyDescription.length > 287 &&
                <div>
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
                </div>
              }
            </div>}
          { showEdit && !shouldUpdate &&
            <Link className="EmployerProfileBanner-editButton EmployerProfileBanner-hrefText" to={'/myprofile/edit-profile'}>
              <div className="EmployerProfileBanner-editButtonText">
                Edit
              </div>
            </Link>
          }
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

