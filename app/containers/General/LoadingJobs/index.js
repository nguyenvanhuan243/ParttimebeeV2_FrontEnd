import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';

export default class LoadingJobs extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="HomePageContainer">
          <CategoryList />
          <div className="JobListContainer">
            <LoadingJobsList />
          </div>
          <div className="SidebarContainer">
            <Subscribe />
            <Sponsored />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
