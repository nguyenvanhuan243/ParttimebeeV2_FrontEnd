import React, { PureComponent } from 'react';
import LogoIcon from 'components/Icons/Logo/Loadable';
import SearchIcon from 'components/Icons/Search/Loadable';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    const notLoginStyle = { marginLeft: (localStorage.currentUser && user) ? '0' : '56' };
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
              <Link className="Header-href" to={(localStorage.currentUser && user) ? '/post-job' : '/user/login'}>
                <div className="Header-postJob">
                  <div className="Header-postJobText"> POST JOB </div>
                </div>
              </Link>
              { (localStorage.currentUser && user) && <button
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
            <div className="Header-expandLoggedAvatar">
              <ul className="Header-ulContainer">
                <li className="Header-paddingTop">
                  <Link className="Header-hrefText" to={'/myjobs/myjobs'}>
                    MY JOBS
                  </Link>
                </li>
                <li>
                  <Link className="Header-hrefText" to={'/myprofile/my-profile'}>
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
