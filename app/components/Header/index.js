import React, { PureComponent } from 'react';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
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
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import config from '../../../config';

const params = new URLSearchParams(location.search);
export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = { expandAvatar: false, user: {} };
  }

  componentWillMount() {
    if (params.get('confirmed')) {
      localStorage.setItem('currentUser', params.get('userid'));
    }
    const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
    axios.get(requestUrl).then(response => {
      if (isEmpty(response.data)) {
        localStorage.setItem('currentUser', '');
      }
      this.setState({ user: response.data });
    });
  }

  onLogout() {
    localStorage.removeItem('currentUser');
    location.replace(`${config.BASE_URL}`);
  }

  onSubmit = e => {
    e.preventDefault();
    location.replace(`${location.href}?search=${this.search.value}`);
  }

  getMyProfileUrl = user => {
    const {
      company_name: companyName = '',
      contact_name: contactName = '',
    } = user;
    return `/myprofile${companyName && contactName ? '/my-profile' : '/first-time-post-job'}`;
  }

  getMyJobUrl = user => {
    const {
      company_name: companyName = '',
      contact_name: contactName = '',
    } = user;
    return `/myjobs${companyName && contactName ? '/myjobs' : '/first-time-post-job'}`;
  }

  getDefaultAvatar = user => {
    if (user.default_avatar.includes('1')) {
      return <DefaultAvatar1 />;
    }
    if (user.default_avatar.includes('2')) {
      return <DefaultAvatar2 />;
    }
    if (user.default_avatar.includes('3')) {
      return <DefaultAvatar3 />;
    }
    if (user.default_avatar.includes('4')) {
      return <DefaultAvatar4 />;
    }
    if (user.default_avatar.includes('5')) {
      return <DefaultAvatar5 />;
    }
    if (user.default_avatar.includes('6')) {
      return <DefaultAvatar6 />;
    }
    if (user.default_avatar.includes('7')) {
      return <DefaultAvatar7 />;
    }
    if (user.default_avatar.includes('8')) {
      return <DefaultAvatar8 />;
    }
    if (user.default_avatar.includes('9')) {
      return <DefaultAvatar9 />;
    }
    if (user.default_avatar.includes('10')) {
      return <DefaultAvatar10 />;
    }
    if (user.default_avatar.includes('11')) {
      return <DefaultAvatar11 />;
    }
    if (user.default_avatar.includes('12')) {
      return <DefaultAvatar12 />;
    }
    if (user.default_avatar.includes('13')) {
      return <DefaultAvatar13 />;
    }
    if (user.default_avatar.includes('14')) {
      return <DefaultAvatar14 />;
    }
    if (user.default_avatar.includes('15')) {
      return <DefaultAvatar15 />;
    }
    if (user.default_avatar.includes('16')) {
      return <DefaultAvatar16 />;
    }
    if (user.default_avatar.includes('17')) {
      return <DefaultAvatar17 />;
    }
    if (user.default_avatar.includes('19')) {
      return <DefaultAvatar18 />;
    }
    if (user.default_avatar.includes('19')) {
      return <DefaultAvatar19 />;
    }
    if (user.default_avatar.includes('20')) {
      return <DefaultAvatar20 />;
    }
    if (user.default_avatar.includes('21')) {
      return <DefaultAvatar21 />;
    }
    if (user.default_avatar.includes('22')) {
      return <DefaultAvatar22 />;
    }
    if (user.default_avatar.includes('23')) {
      return <DefaultAvatar23 />;
    }
    if (user.default_avatar.includes('24')) {
      return <DefaultAvatar24 />;
    }
    if (user.default_avatar.includes('25')) {
      return <DefaultAvatar25 />;
    }
    if (user.default_avatar.includes('26')) {
      return <DefaultAvatar26 />;
    }
    if (user.default_avatar.includes('27')) {
      return <DefaultAvatar27 />;
    }
    if (user.default_avatar.includes('28')) {
      return <DefaultAvatar28 />;
    }
    if (user.default_avatar.includes('29')) {
      return <DefaultAvatar29 />;
    }
    if (user.default_avatar.includes('30')) {
      return <DefaultAvatar30 />;
    }
    if (user.default_avatar.includes('31')) {
      return <DefaultAvatar31 />;
    }
    if (user.default_avatar.includes('32')) {
      return <DefaultAvatar32 />;
    }
    if (user.default_avatar.includes('33')) {
      return <DefaultAvatar33 />;
    }
    if (user.default_avatar.includes('34')) {
      return <DefaultAvatar34 />;
    }
    if (user.default_avatar.includes('35')) {
      return <DefaultAvatar35 />;
    }
    if (user.default_avatar.includes('36')) {
      return <DefaultAvatar36 />;
    }
    if (user.default_avatar.includes('37')) {
      return <DefaultAvatar37 />;
    }
    if (user.default_avatar.includes('38')) {
      return <DefaultAvatar38 />;
    }
    if (user.default_avatar.includes('39')) {
      return <DefaultAvatar39 />;
    }
    if (user.default_avatar.includes('40')) {
      return <DefaultAvatar40 />;
    }
    if (user.default_avatar.includes('41')) {
      return <DefaultAvatar41 />;
    }
    if (user.default_avatar.includes('42')) {
      return <DefaultAvatar42 />;
    }
    if (user.default_avatar.includes('43')) {
      return <DefaultAvatar43 />;
    }
    if (user.default_avatar.includes('44')) {
      return <DefaultAvatar44 />;
    }
    if (user.default_avatar.includes('45')) {
      return <DefaultAvatar45 />;
    }
    if (user.default_avatar.includes('46')) {
      return <DefaultAvatar46 />;
    }
    if (user.default_avatar.includes('47')) {
      return <DefaultAvatar47 />;
    }
    if (user.default_avatar.includes('48')) {
      return <DefaultAvatar48 />;
    }
    if (user.default_avatar.includes('49')) {
      return <DefaultAvatar49 />;
    }
    if (user.default_avatar.includes('50')) {
      return <DefaultAvatar50 />;
    }
    return <DefaultAvatar1 />;
  }

  handleFlowPostJob = user => {
    if (isEmpty(user)) {
      return '/user/login';
    }
    const {
      company_name: companyName = '',
      contact_name: contactName = '',
    } = user;
    const isPostJob = `${companyName && contactName ? '/post-job' : '/myjobs/first-time-post-job'}`;
    return (localStorage.currentUser && user) ? isPostJob : '/user/login';
  }

  render() {
    const { expandAvatar, user } = this.state;
    const notLoginStyle = { marginLeft: (localStorage.currentUser && user && user.email_confirmed) ? '0' : '56' };
    return (
      <div>
        <div className="Header">
          <div className="Header-container">
            <div className="Header-searchForm">
              <form onSubmit={this.onSubmit} className="SearchForm">
                <SearchIcon />
                <input
                  className="SearchForm-customInput"
                  placeholder="Search job..."
                  ref={ref => (this.search = ref)}
                />
              </form>
            </div>
            <div className="Header-logo">
              <LogoIcon />
            </div>
            <div style={notLoginStyle} className="Header-postJobContainer">
              <Link className="Header-href" to={this.handleFlowPostJob(user)}>
                <button className="Header-postJob">
                  <div className="Header-postJobText"> POST JOB </div>
                </button>
              </Link>
              { (localStorage.currentUser && user && user.email_confirmed) && <button
                onClick={() => this.setState({ expandAvatar: !this.state.expandAvatar })}
                className="Header-loggedAvatar"
              >
                { !user.url_avatar && this.getDefaultAvatar(user) }
                { user.url_avatar && <img
                  alt="fdsfds"
                  src={user.url_avatar}
                  className="Header-updatedAvatar"
                /> }
              </button> }
            </div>
          </div>
        </div>
        { expandAvatar &&
          <div className="Header-expandLoggedAvatarContainer">
            <div className="Header-triangle-up" />
            <div className="Header-triangle-upTop" />
            <div className="Header-expandLoggedAvatar">
              <ul className="Header-ulContainer">
                <li className="Header-paddingTop">
                  <Link className="Header-hrefText" to={this.getMyJobUrl(user)}>
                    MY JOBS
                  </Link>
                </li>
                <li>
                  <Link className="Header-hrefText" to={this.getMyProfileUrl(user)}>
                    MY PROFILE
                  </Link>
                </li>
                <div className="Header-separateMenu">
                </div>
                <li>
                  <Link onClick={() => this.onLogout()} className="Header-hrefText" to="">
                    LOGOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div> }
      </div>
    );
  }
}
