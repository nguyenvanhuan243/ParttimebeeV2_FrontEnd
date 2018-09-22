import React, { PureComponent } from 'react';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
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
