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
import MyJobsOnGoingSingleBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsOnGoingSingleOnGoingSingle extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsOnGoingSingle">
        <div className="MyJobsOnGoingSingle-header">
          <Header />
        </div>
        <div className="MyJobsOnGoingSingle-bodyContainer">
          <div className="MyJobsOnGoingSingle-MyJobsOnGoingSingleBanner">
            <MyJobsOnGoingSingleBanner />
          </div>
          <div className="MyJobsOnGoingSingle-contentContainer">
            <div className="MyJobsOnGoingSingle-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsOnGoingSingle-jobList">
              <JobList />
            </div>
            <div className="MyJobsOnGoingSingle-sideBar">
              <ShareThisProfile />
              <div className="MyJobsOnGoingSingle-googleAds250276">
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

