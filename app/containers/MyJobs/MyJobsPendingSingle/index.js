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
import MyJobsPendingSingleBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
export default class MyJobsPendingSingle extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsPendingSingle">
        <div className="MyJobsPendingSingle-header">
          <Header />
        </div>
        <div className="MyJobsPendingSingle-bodyContainer">
          <div className="MyJobsPendingSingle-MyJobsPendingSingleBanner">
            <MyJobsPendingSingleBanner />
          </div>
          <div className="MyJobsPendingSingle-contentContainer">
            <div className="MyJobsPendingSingle-availableJob">
              Available Jobs
            </div>
            <div className="MyJobsPendingSingle-jobList">
              <JobList />
            </div>
            <div className="MyJobsPendingSingle-sideBar">
              <ShareThisProfile />
              <div className="MyJobsPendingSingle-googleAds250276">
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

