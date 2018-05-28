/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import classname from 'classnames';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
import config from '../../../config';

export default class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      expandAvatar: false,
    };
  }
  onLogout() {
    localStorage.removeItem('currentUser');
    window.location.replace(`${config.BASE_URL}`);
  }
  handleExpandAvatar() {
    this.setState({
      expandAvatar: !this.state.expandAvatar,
    });
  }
  render() {
    const {
      expandAvatar,
    } = this.state;
    const logoutStatus = location.pathname.includes('logout');
    const logoutClassName = classname('Header-postJob', { 'Header-logout': logoutStatus });
    return (
      <div>
        <div className="Header">
          <div className="Header-container">
            <div className="Header-searchForm">
              <form className="SearchForm">
                <div className="SearchIcon">
                  <SearchIcon />
                </div>
                <input className="SearchForm-customInput" placeholder="Search job..." />
              </form>
            </div>
            <div className="Header-logo">
              <LogoIcon />
            </div>
            <div className="Header-postJobContainer">
              <a className="Header-href" href={`${config.BASE_URL}/user/signup`}>
                <div className={logoutClassName}>
                  <span className="Header-postJobText">
                    POSTJOB
                  </span>
                </div>
              </a>
              { localStorage.currentUser && <button onClick={() => this.handleExpandAvatar()} className="Header-loggedAvatar"></button> }
            </div>
          </div>
        </div>
        { expandAvatar ?
          <div className="Header-expandLoggedAvatarContainer">
            <div className="Header-expandLoggedAvatar">
              <ul className="Header-ulContainer">
                <li>
                  <a className="Header-hrefText" href={`${config.BASE_URL}/myjobs/myjobs`}>
                    My Jobs
                  </a>
                </li>
                <li>
                  <a className="Header-hrefText" href={`${config.BASE_URL}/myprofile/my-profile`}>
                    My Profile
                  </a>
                </li>
                <li>
                  <a onClick={() => this.onLogout()} className="Header-hrefText" href="">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div> : null }
      </div>
    );
  }
}
