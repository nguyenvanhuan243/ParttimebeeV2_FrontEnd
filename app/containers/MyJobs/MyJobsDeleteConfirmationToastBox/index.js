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
export default class MyJobsDeleteConfirmationToastBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsDeleteConfirmationToastBox">
        <div className="MyJobsDeleteConfirmationToastBox-header">
          <Header />
        </div>
        <div className="MyJobsDeleteConfirmationToastBox-bodyContainer">
          <div className="MyJobsDeleteConfirmationToastBox-MyJobsDeleteConfirmationToastBoxBanner">
            <EmployerProfileBanner />
          </div>
          <div className="MyJobsDeleteConfirmationToastBox-contentContainer">
            <div className="MyJobsDeleteConfirmationToastBox-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsDeleteConfirmationToastBox-jobList">
              <JobList />
            </div>
            <div className="MyJobsDeleteConfirmationToastBox-sideBar">
              <ShareThisProfile />
              <div className="MyJobsDeleteConfirmationToastBox-googleAds250276">
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

