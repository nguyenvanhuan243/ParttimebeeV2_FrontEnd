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

export default class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Header">
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
        <div className="Header-postJob">
          <a className="Header-postJobText" href="/post-job">
            POSTJOB
          </a>
        </div>
      </div>
    );
  }
}
