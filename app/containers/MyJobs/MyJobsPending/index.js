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
import MyJobsPendingBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
import MyJobsComponent from 'components/MyJobsComponent/Loadable';
export default class MyJobsPending extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="MyJobsPending">
        <div className="MyJobsPending-header">
          <Header />
        </div>
        <div className="MyJobsPending-bodyContainer">
          <div className="MyJobsPending-MyJobsPendingBanner">
            <MyJobsPendingBanner />
          </div>
          <div className="MyJobsPending-contentContainer">
            <div className="MyJobsPending-availableJob">
              <MyJobsComponent />
            </div>
            <div className="MyJobsPending-jobList">
              <JobList title="Pending" />
            </div>
            <div className="MyJobsPending-sideBar">
              <ShareThisProfile />
              <div className="MyJobsPending-googleAds250276">
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

