import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
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
    );
  }
}
