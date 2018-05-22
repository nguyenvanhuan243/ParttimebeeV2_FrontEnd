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
  handleExpandAvatar() {
    this.setState({
      expandAvatar: !this.state.expandAvatar,
    });
  }
  render() {
    const {
      expandAvatar,
    } = this.state;
    return (
      <span>
        <div className="Header">
          <div className="Header-searchForm col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <form className="SearchForm">
              <div className="SearchIcon">
                <SearchIcon />
              </div>
              <input className="SearchForm-customInput" placeholder="Search job..." />
            </form>
          </div>
          <div className="Header-logo col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <LogoIcon />
          </div>
          <div className="Header-postJobContainer col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="Header-postJob">
              <a className="Header-postJobText" href="/post-job">
                POSTJOB
              </a>
            </div>
            <div className="Header-buttonContainer">
              <button onClick={() => this.handleExpandAvatar()} className="Header-loggedAvatar">
              </button>
            </div>
          </div>
        </div>
        { expandAvatar ?
          <div className="Header-expandLoggedAvatar">
            <ul>
              <li>
                <a href={`${config.BASE_URL}/myjobs/myjobs`}>
                  MyJobs
                </a>
              </li>
              <li>
                <a href={`${config.BASE_URL}/myprofile/my-profile`}>
                  MyProfile
                </a>
              </li>
              <li>
                <a href={`${config.BASE_URL}/logout`}>
                  Logout
                </a>
              </li>
            </ul>
          </div> : null }
      </span>
    );
  }
}
