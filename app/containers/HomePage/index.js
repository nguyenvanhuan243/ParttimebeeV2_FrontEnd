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
import Header from 'components/Header/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import Footer from 'components/Footer/Loadable';

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="HomePageContainer">
            <div className="HomePageContainer-categoryList">
              <CategoryList />
            </div>
            <div className="HomePageContainer-jobListContainer">
              <JobList />
            </div>
            <div className="HomePageContainer-sidebarContainer">
              <Subscribe />
              <Sponsored />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
