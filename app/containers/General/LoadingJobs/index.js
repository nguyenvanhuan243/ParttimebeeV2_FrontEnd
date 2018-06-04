import React from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';

const LoadingJobs = () => (
  <div>
    <Header />
    <div className="HomePageContainer"> <CategoryList />
      <div className="JobListContainer"> <LoadingJobsList /> </div>
      <div className="SidebarContainer"> <Subscribe /> <Sponsored /> <Footer /> </div>
    </div>
  </div>
);
export default LoadingJobs;
