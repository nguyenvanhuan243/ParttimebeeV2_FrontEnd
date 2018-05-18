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
import MyJobsExpiredBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsExpiredExpired extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsExpired">
        <div className="MyJobsExpired-header">
          <Header />
        </div>
        <div className="MyJobsExpired-bodyContainer">
          <div className="MyJobsExpired-MyJobsExpiredBanner">
            <MyJobsExpiredBanner />
          </div>
          <div className="MyJobsExpired-contentContainer">
            <div className="MyJobsExpired-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsExpired-jobList">
              <JobList />
            </div>
            <div className="MyJobsExpired-sideBar">
              <ShareThisProfile />
              <div className="MyJobsExpired-googleAds250276">
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

