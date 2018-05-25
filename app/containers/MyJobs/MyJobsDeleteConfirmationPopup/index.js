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
export default class MyJobsDeleteConfirmationPopup extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsDeleteConfirmationPopup">
        <div className="MyJobsDeleteConfirmationPopup-header">
          <Header />
        </div>
        <div className="MyJobsDeleteConfirmationPopup-bodyContainer">
          <div className="MyJobsDeleteConfirmationPopup-MyJobsDeleteConfirmationPopupBanner">
            <EmployerProfileBanner />
          </div>
          <div className="MyJobsDeleteConfirmationPopup-contentContainer">
            <div className="MyJobsDeleteConfirmationPopup-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsDeleteConfirmationPopup-jobList">
              <JobList />
            </div>
            <div className="MyJobsDeleteConfirmationPopup-sideBar">
              <ShareThisProfile />
              <div className="MyJobsDeleteConfirmationPopup-googleAds250276">
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

