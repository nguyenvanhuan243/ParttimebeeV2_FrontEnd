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
import Footer from 'components/Footer/Loadable';
import JobDetailHeader from 'components/JobDetail/JobDetailHeader/Loadable';
import JobInformation from 'components/JobDetail/JobInformation/Loadable';
import JobDescription from 'components/JobDetail/JobDescription/Loadable';
import RelatedJobList from 'components/JobDetail/RelatedJobList/Loadable';
import CompanyInfo from 'components/JobDetail/CompanyInfo/Loadable';
import RectangleGoogleAds from 'components/Advertiments/RectangleGoogleAds/Loadable';
import SquareleGoogleAds from 'components/Advertiments/SquareGoogleAds/Loadable';
import ReportJobPopup from 'components/ReportJobPopup/Loadable';
import classNames from 'classnames';

export default class JobDetail extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  showReportPopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    const {
      showPopup = false,
    } = this.state;
    const className = classNames('JobDetail-reportJobPopup',
      { 'JobDetail-showReportPopup': showPopup }
    );
    return (
      <div className="JobDetail container">
        <div className={className}>
          <ReportJobPopup closePopupFunc={() => this.showReportPopup()} />
        </div>
        <div className="JobDetail-reportJob">
          <Header />
          <div className="JobDetail-container">
            <div>
              <JobDetailHeader />
              <div className="JobDetail-jobInformation">
                <JobInformation handleShowPopup={() => this.showReportPopup()} />
              </div>
              <div className="JobDetail-descriptionTitle">
                JOB DESCRIPTION
              </div>
              <div className="JobDetail-description">
                <JobDescription />
              </div>
              <div className="JobDetail-rectangleGoogleAds">
                <RectangleGoogleAds />
              </div>
            </div>
            <div className="JobDetail-sideBar">
              <div className="JobDetail-separateAbove">
                <div className="JobDetail-separate">
                </div>
              </div>
              <div className="JobDetail-sideBarCompanyInfo">
                <CompanyInfo />
              </div>
              <div className="JobDetail-separateBelow">
                <div className="JobDetail-separate">
                </div>
              </div>
              <div className="JobDetail-relatedJobs">
                <RelatedJobList />
              </div>
              <div className="JobDetail-squareleGoogleAds">
                <SquareleGoogleAds />
              </div>
              <div className="JobDetail-Footer">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

