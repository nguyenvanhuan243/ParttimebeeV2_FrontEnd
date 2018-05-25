import React, { Component } from 'react';
import Footer from 'components/Footer/Loadable';
import Header from 'components/Header/Loadable';
import JobList from 'components/JobList/Loadable';
import GoogleAdsense from 'components/GoogleAdsense/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import EmployerProfileBanner from 'components/EmployerProfileBanner/Loadable';

export default class EmployerAvailableJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EmployerProfile container">
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

