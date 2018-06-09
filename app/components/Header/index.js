import React, { PureComponent } from 'react';
import classname from 'classnames';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
import config from '../../../config';

export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = { expandAvatar: false };
  }
  onLogout() {
    localStorage.removeItem('currentUser');
    window.location.replace(`${config.BASE_URL}`);
  }
  render() {
    const { expandAvatar } = this.state;
    const logoutStatus = location.pathname.includes('logout');
    const notLoginStyle = { marginLeft: localStorage.currentUser ? '0' : '56' };
    const logoutClassName = classname('Header-postJob', { 'Header-logout': logoutStatus });
    return (
      <div>
        <div className="Header">
          <div className="Header-container">
            <div className="Header-searchForm">
              <form className="SearchForm">
                <div className="SearchIcon"> <SearchIcon /> </div>
                <input className="SearchForm-customInput" placeholder="Search job..." />
              </form>
            </div>
            <div className="Header-logo">
              <LogoIcon />
            </div>
            <div style={notLoginStyle} className="Header-postJobContainer">
              <a className="Header-href" href={localStorage.currentUser ? `${config.BASE_URL}/postjobs-post-job` : `${config.BASE_URL}/user/login`}>
                <div className={logoutClassName}>
                  <span className="Header-postJobText"> POSTJOB </span>
                </div>
              </a>
              { localStorage.currentUser && <button onClick={() => this.setState({ expandAvatar: !this.state.expandAvatar })} className="Header-loggedAvatar"></button> }
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
