import React from 'react';
import Header from 'components/Header/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import Footer from 'components/Footer/Loadable';

const JobByState = () => (
  <div>
    <Header />
    <div className="JobByState">
      <div className="HomePageContainer-categoryList"> <CategoryList /> </div>
      <div className="JobByState-jobListContainer">
        <JobList showHeading text="Jobs in Kuala Lumpur" />
      </div>
      <div className="JobByState-sidebarContainer">
        <Subscribe /> <Sponsored /> <Footer />
      </div>
    </div>
  </div>
);
export default JobByState;
