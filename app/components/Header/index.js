import React, { PureComponent } from 'react';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
import axios from 'axios';
import config from '../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = { expandAvatar: false, user: {} };
  }
  componentWillMount() {
    axios.get(requestUrl).then((response) => {
      this.setState({ user: response.data });
    });
  }
  onLogout() {
    localStorage.removeItem('currentUser');
    location.replace(`${config.BASE_URL}`);
  }
  onSubmit = (e) => {
    e.preventDefault();
    location.replace(`${location.href}?search=${this.search.value}`);
  }
  render() {
    const { expandAvatar, user } = this.state;
    const notLoginStyle = { marginLeft: localStorage.currentUser ? '0' : '56' };
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
                  ref={(ref) => (this.search = ref)}
                />
              </form>
            </div>
            <div className="Header-logo">
              <LogoIcon />
            </div>
            <div style={notLoginStyle} className="Header-postJobContainer">
              <a className="Header-href" href={localStorage.currentUser ? `${config.BASE_URL}/postjobs-post-job` : `${config.BASE_URL}/user/login`}>
                <div className="Header-postJob">
                  <div className="Header-postJobText"> POSTJOB </div>
                </div>
              </a>
              { localStorage.currentUser && <button
                onClick={() => this.setState({ expandAvatar: !this.state.expandAvatar })}
                className="Header-loggedAvatar"
              >
                <img
                  alt="fdsfds"
                  src={user.url_avatar}
                  className="Header-updatedAvatar"
                />
              </button> }
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
