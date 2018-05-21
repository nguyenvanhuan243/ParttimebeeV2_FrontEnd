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
import MyJobsComponent from 'components/MyJobsComponent/Loadable';
export default class MyProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const SHOWEDIT = true;
    return (
      <div className="MyProfile">
        <div className="MyProfile-header">
          <Header />
        </div>
        <div className="MyProfile-bodyContainer">
          <div className="MyProfile-MyProfileBanner">
            <EmployerProfileBanner showEdit={SHOWEDIT} />
          </div>
          <div className="MyProfile-contentContainer">
            <div className="MyProfile-availableJob">
              <MyJobsComponent />
            </div>
            <div className="MyProfile-jobList">
              <JobList />
            </div>
            <div className="MyProfile-sideBar">
              <ShareThisProfile />
              <div className="MyProfile-googleAds250276">
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
