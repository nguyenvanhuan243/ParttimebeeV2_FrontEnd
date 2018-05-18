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

import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import MyJobsBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsNoJobs extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobs">
        <div className="MyJobs-header">
          <Header />
        </div>
        <div className="MyJobs-bodyContainer">
          <div className="MyJobs-MyJobsBanner">
            <MyJobsBanner />
          </div>
          <div className="MyJobs-contentContainer">
            <div className="MyJobs-availableJob">
              Available Jobs
            </div>
            <div className="MyJobs-jobList">
              <JobList />
            </div>
            <div className="MyJobs-sideBar">
              <ShareThisProfile />
              <div className="MyJobs-googleAds250276">
                <GoogleAds250276 />
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

