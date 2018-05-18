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
export default class EmployerAvailableJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EmployerProfile">
        <div className="EmployerProfile-header">
          <Header />
        </div>
        <div className="EmployerProfile-bodyContainer">
          <div className="EmployerProfile-employerProfileBanner">
            <EmployerProfileBanner />
          </div>
          <div className="EmployerProfile-contentContainer">
            <div className="EmployerProfile-availableJob">
              Available Jobs
            </div>
            <div className="EmployerProfile-jobList">
              <JobList />
            </div>
            <div className="EmployerProfile-sideBar">
              <ShareThisProfile />
              <div className="EmployerProfile-googleAds250276">
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

