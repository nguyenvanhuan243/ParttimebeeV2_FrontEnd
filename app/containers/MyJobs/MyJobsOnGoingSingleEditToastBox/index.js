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
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsOnGoingSingleEditToastBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsOnGoingSingleEditToastBox">
        <div className="MyJobsOnGoingSingleEditToastBox-header">
          <Header />
        </div>
        <div className="MyJobsOnGoingSingleEditToastBox-bodyContainer">
          <div className="MyJobsOnGoingSingleEditToastBox-MyJobsOnGoingSingleEditToastBoxBanner">
            <EmployerProfileBanner />
          </div>
          <div className="MyJobsOnGoingSingleEditToastBox-contentContainer">
            <div className="MyJobsOnGoingSingleEditToastBox-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsOnGoingSingleEditToastBox-jobList">
              <JobList />
            </div>
            <div className="MyJobsOnGoingSingleEditToastBox-sideBar">
              <ShareThisProfile />
              <div className="MyJobsOnGoingSingleEditToastBox-googleAds250276">
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

