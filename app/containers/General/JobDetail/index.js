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
import CreatedJobAlert from 'components/JobDetail/CreatedJobAlert/Loadable';
import classNames from 'classnames';
import axios from 'axios';
import config from '../../../../config';

export default class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      jobItem: {},
      user: {},
    };
  }

  // Get a specify user with id
  componentWillMount() {
    const jobId = location.pathname.match(/\d+/)[0];
    const url = `${config.API_BASE_URL}/jobs/${jobId}`;
    const viewNumberUrl = `${config.API_BASE_URL}/jobs/${jobId}/increase-view`;
    axios.get(url).then((response) => {
      this.setState({ jobItem: response.data.job });
      this.setState({ user: response.data.user });
    });
    axios.get(viewNumberUrl);
  }

  showReportPopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    const { showPopup = false, jobItem = {} } = this.state;
    const className = classNames('JobDetail-reportJobPopup',
      { 'JobDetail-showReportPopup': showPopup }
    );
    const hasCreatedJob = location.search.includes('created');
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
                companyName={jobItem.company_name}
                state={jobItem.salary_state}
                city={jobItem.city}
              />
              <div className="JobDetail-jobInformation">
                <JobInformation
                  handleShowPopup={() => this.showReportPopup()}
                  jobId={jobItem.id}
                  category={jobItem.category}
                  salary={jobItem.salary}
                  createdDay={jobItem.created_at}
                  views={jobItem.views}
                />
              </div>
              <div className="JobDetail-descriptionTitle">
                JOB DESCRIPTION
              </div>
              <div className="JobDetail-description">
                <JobDescription
                  text={jobItem.description}
                  jobType={jobItem.job_type}
                />
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
                <CompanyInfo userId={this.state.user.id} />
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
              { hasCreatedJob && <CreatedJobAlert /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

