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

export default class JobByState extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="JobByState">
          <div className="JobByState-categoryList">
            <CategoryList />
          </div>
          <div className="JobByState-jobListContainer">
            <JobList showHeading text="Jobs in Kuala Lumpur" />
          </div>
          <div className="JobByState-sidebarContainer">
            <Subscribe />
            <Sponsored />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

