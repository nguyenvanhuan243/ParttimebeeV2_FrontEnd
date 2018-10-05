import classNames from 'classnames';
import { Link } from 'react-router-dom';
import WebIcon from 'components/Icons/Web/Loadable';
import React, { PureComponent, PropTypes } from 'react';
import PhoneIcon from 'components/Icons/Phone/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import {
  DefaultAvatar1,
  DefaultAvatar2,
  DefaultAvatar3,
  DefaultAvatar4,
  DefaultAvatar5,
  DefaultAvatar6,
  DefaultAvatar7,
  DefaultAvatar8,
  DefaultAvatar9,
  DefaultAvatar10,
  DefaultAvatar11,
  DefaultAvatar12,
  DefaultAvatar13,
  DefaultAvatar14,
  DefaultAvatar15,
  DefaultAvatar16,
  DefaultAvatar17,
  DefaultAvatar18,
  DefaultAvatar19,
  DefaultAvatar20,
  DefaultAvatar21,
  DefaultAvatar22,
  DefaultAvatar23,
  DefaultAvatar24,
  DefaultAvatar25,
  DefaultAvatar26,
  DefaultAvatar27,
  DefaultAvatar28,
  DefaultAvatar29,
  DefaultAvatar30,
  DefaultAvatar31,
  DefaultAvatar32,
  DefaultAvatar33,
  DefaultAvatar34,
  DefaultAvatar35,
  DefaultAvatar36,
  DefaultAvatar37,
  DefaultAvatar38,
  DefaultAvatar39,
  DefaultAvatar40,
  DefaultAvatar41,
  DefaultAvatar42,
  DefaultAvatar43,
  DefaultAvatar44,
  DefaultAvatar45,
  DefaultAvatar46,
  DefaultAvatar47,
  DefaultAvatar48,
  DefaultAvatar49,
  DefaultAvatar50,
} from 'components/DefaultAvatar';
import axios from 'axios';
import { isMac } from '../../utils/operatingSystem';
import config from '../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
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

  getDefaultAvatar = user => {
    if (user.default_avatar) {
      if (user.default_avatar.includes('1')) {
        return <DefaultAvatar1 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('2')) {
        return <DefaultAvatar2 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('3')) {
        return <DefaultAvatar3 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('4')) {
        return <DefaultAvatar4 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('5')) {
        return <DefaultAvatar5 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('6')) {
        return <DefaultAvatar6 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('7')) {
        return <DefaultAvatar7 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('8')) {
        return <DefaultAvatar8 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('9')) {
        return <DefaultAvatar9 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('10')) {
        return <DefaultAvatar10 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('11')) {
        return <DefaultAvatar11 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('12')) {
        return <DefaultAvatar12 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('13')) {
        return <DefaultAvatar13 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('14')) {
        return <DefaultAvatar14 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('15')) {
        return <DefaultAvatar15 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('16')) {
        return <DefaultAvatar16 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('17')) {
        return <DefaultAvatar17 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('19')) {
        return <DefaultAvatar18 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('19')) {
        return <DefaultAvatar19 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('20')) {
        return <DefaultAvatar20 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('21')) {
        return <DefaultAvatar21 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('22')) {
        return <DefaultAvatar22 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('23')) {
        return <DefaultAvatar23 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('24')) {
        return <DefaultAvatar24 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('25')) {
        return <DefaultAvatar25 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('26')) {
        return <DefaultAvatar26 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('27')) {
        return <DefaultAvatar27 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('28')) {
        return <DefaultAvatar28 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('29')) {
        return <DefaultAvatar29 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('30')) {
        return <DefaultAvatar30 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('31')) {
        return <DefaultAvatar31 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('32')) {
        return <DefaultAvatar32 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('33')) {
        return <DefaultAvatar33 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('34')) {
        return <DefaultAvatar34 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('35')) {
        return <DefaultAvatar35 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('36')) {
        return <DefaultAvatar36 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('37')) {
        return <DefaultAvatar37 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('38')) {
        return <DefaultAvatar38 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('39')) {
        return <DefaultAvatar39 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('40')) {
        return <DefaultAvatar40 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('41')) {
        return <DefaultAvatar41 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('42')) {
        return <DefaultAvatar42 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('43')) {
        return <DefaultAvatar43 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('44')) {
        return <DefaultAvatar44 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('45')) {
        return <DefaultAvatar45 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('46')) {
        return <DefaultAvatar46 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('47')) {
        return <DefaultAvatar47 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('48')) {
        return <DefaultAvatar48 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('49')) {
        return <DefaultAvatar49 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
      if (user.default_avatar.includes('50')) {
        return <DefaultAvatar50 avatarWidth={'140px'} avatarHeight={'140px'} />;
      }
    }
    return <DefaultAvatar1 avatarWidth={'140px'} avatarHeight={'140px'} />;
  }

  render() {
    const {
      phone,
      email,
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
    });

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
};

