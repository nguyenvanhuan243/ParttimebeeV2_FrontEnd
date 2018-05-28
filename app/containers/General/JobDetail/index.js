import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobDetailHeader from 'components/JobDetail/JobDetailHeader/Loadable';
import JobInformation from 'components/JobDetail/JobInformation/Loadable';
import JobDescription from 'components/JobDetail/JobDescription/Loadable';
import RelatedJobList from 'components/JobDetail/RelatedJobList/Loadable';
import CompanyInfo from 'components/JobDetail/CompanyInfo/Loadable';
import GoogleAdsense from 'components/GoogleAdsense/Loadable';
import ReportJobPopup from 'components/Popup/ReportJob/Loadable';
import classNames from 'classnames';
import axios from 'axios';
import config from '../../../../config';

export default class JobDetail extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showPopup: false,
      jobItem: {},
    };
  }

  // Get a specify user with id
  componentWillMount() {
    const jobId = location.pathname.match(/\d+/)[0];
    const url = `${config.API_BASE_URL}/jobs/${jobId}`;
    axios.get(url).then((response) => {
      this.setState({
        jobItem: response.data,
      });
    });
  }

  showReportPopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    const {
      showPopup = false,
      jobItem = {},
    } = this.state;
    const className = classNames('JobDetail-reportJobPopup',
      { 'JobDetail-showReportPopup': showPopup }
    );
    return (
      <div>
        <div className={className}>
          <ReportJobPopup closePopupFunc={() => this.showReportPopup()} />
        </div>
        <div>
          <Header />
          <div className="JobDetail-container">
            <div className="JobDetail-containerContent">
              <JobDetailHeader
                title={jobItem.title}
                companyName={jobItem.companyName}
                state={jobItem.state}
                city={jobItem.city}
              />
              <div className="JobDetail-jobInformation">
                <JobInformation handleShowPopup={() => this.showReportPopup()} />
              </div>
              <div className="JobDetail-descriptionTitle">
                JOB DESCRIPTION
                { jobItem.title }
              </div>
              <div className="JobDetail-description">
                <JobDescription />
              </div>
              <div className="JobDetail-rectangleGoogleAds">
                <GoogleAdsense adsWidth={468} adsHeight={60} />
              </div>
            </div>
            <div className="JobDetail-containerSideBar">
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
                <GoogleAdsense adsWidth={320} adsHeight={300} />
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

