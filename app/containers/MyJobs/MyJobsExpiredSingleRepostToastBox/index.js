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
import EmployerProfileBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAdsense from 'components/GoogleAdsense/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsExpiredSingleRepostToastBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsExpiredSingleRepostToastBox">
        <div className="MyJobsExpiredSingleRepostToastBox-header">
          <Header />
        </div>
        <div className="MyJobsExpiredSingleRepostToastBox-bodyContainer">
          <div className="MyJobsExpiredSingleRepostToastBox-MyJobsExpiredSingleRepostToastBoxBanner">
            <EmployerProfileBanner />
          </div>
          <div className="MyJobsExpiredSingleRepostToastBox-contentContainer">
            <div className="MyJobsExpiredSingleRepostToastBox-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsExpiredSingleRepostToastBox-jobList">
              <JobList />
            </div>
            <div className="MyJobsExpiredSingleRepostToastBox-sideBar">
              <ShareThisProfile />
              <div className="MyJobsExpiredSingleRepostToastBox-googleAds250276">
                <GoogleAdsense />
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

