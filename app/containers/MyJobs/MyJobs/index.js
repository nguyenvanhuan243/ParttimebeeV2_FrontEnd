import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import Item from 'components/MyJobsComponent/Item/Loadable';
import EmployerProfileBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAdsense from 'components/GoogleAdsense/Loadable';
import Footer from 'components/Footer/Loadable';
import DeleteConfirmationPopup from 'components/Popup/DeleteConfirmation/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class MyJobs extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showDeleteConfirmationPopup: false,
      activeCurrent: 'on-goging',
      myJobResourceEndPoint: [],
    };
  }
  componentWillMount() {
    const currentUser = localStorage.currentUser;
    const url = `${config.API_BASE_URL}/users/${currentUser}/jobs`;
    axios.get(url).then((response) => this.setState({
      myJobResourceEndPoint: response.data,
    }));
  }
  getActiveJob(active) {
    let activeJob = '';
    if (active.includes('On-going')) {
      activeJob = 'going';
      return activeJob;
    }
    if (active.includes('Pending')) {
      activeJob = 'pending';
      return activeJob;
    }
    if (active.includes('Expired')) {
      activeJob = 'expired';
      return activeJob;
    }
    return activeJob;
  }
  handleDeleteConfirmationPopup() {
    this.setState({
      showDeleteConfirmationPopup: !this.state.showDeleteConfirmationPopup,
    });
  }
  handleActive(value) {
    this.setState({
      activeCurrent: value,
    });
  }
  render() {
    const SHOWEDIT = true;
    const {
      showDeleteConfirmationPopup,
      activeCurrent,
      myJobResourceEndPoint,
    } = this.state;
    const goingJobNumber = myJobResourceEndPoint.filter((item) => item.type_job === 'going').length;
    const pendingJobNumber = myJobResourceEndPoint.filter((item) => item.type_job === 'pending').length;
    const expiredJobNumber = myJobResourceEndPoint.filter((item) => item.type_job === 'expired').length;
    const myJobList = [];
    const textArray = [
      `${goingJobNumber} On-going jobs`,
      `${pendingJobNumber} Pending jobs`,
      `${expiredJobNumber} Expired jobs`,
    ];
    const myProfile = location.pathname.includes('my-profile') || location.pathname.includes('myjobs/myjobs');
    const employerProfile = location.pathname.includes('employer-profile');
    myJobList.push(textArray.map((value) =>
      <Item key={value} onActive={() => this.handleActive(value)} text={value} active={activeCurrent === value} />));
    return (
      <div className="MyJobs">
        <div className="MyJobs-deleteConfirmationPopup">
          { showDeleteConfirmationPopup ? <DeleteConfirmationPopup closeFunc={() => this.handleDeleteConfirmationPopup()} /> : null }
        </div>
        <Header />
        <div className="MyJobs-bodyContainer">
          <div className="MyJobs-MyJobsBanner">
            <EmployerProfileBanner showEdit={SHOWEDIT} />
          </div>
          <div className="MyJobs-contentContainer">
            <div className="MyJobs-availableJob">
              { myProfile ?
                <div className="MyJobsComponent-container">
                  <div className="MyJobsComponent-title">
                    <span className="MyJobsComponent-titleText">
                      My Jobs
                    </span>
                  </div>
                  <div className="MyJobsComponent-content">
                    { myJobList }
                  </div>
                </div> : 'Available Jobs' }
            </div>
            <div className="MyJobs-jobList">
              <JobList
                onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                showDelete={myProfile}
                showEdit={myProfile}
                showCity={employerProfile}
                showView={employerProfile}
                showShare={employerProfile}
                title={activeCurrent}
                showImage={false}
                jobType={this.getActiveJob(activeCurrent)}
              />
            </div>
            <div className="MyJobs-sideBar">
              <ShareThisProfile />
              <div className="MyJobs-googleAds250276">
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
