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
export default class MyJobsPendingSingleEditToastBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsPendingSingleEditToastBox">
        <div className="MyJobsPendingSingleEditToastBox-header">
          <Header />
        </div>
        <div className="MyJobsPendingSingleEditToastBox-bodyContainer">
          <div className="MyJobsPendingSingleEditToastBox-MyJobsPendingSingleEditToastBoxBanner">
            <EmployerProfileBanner />
          </div>
          <div className="MyJobsPendingSingleEditToastBox-contentContainer">
            <div className="MyJobsPendingSingleEditToastBox-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsPendingSingleEditToastBox-jobList">
              <JobList />
            </div>
            <div className="MyJobsPendingSingleEditToastBox-sideBar">
              <ShareThisProfile />
              <div className="MyJobsPendingSingleEditToastBox-googleAds250276">
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

