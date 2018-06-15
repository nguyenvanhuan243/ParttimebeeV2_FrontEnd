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

const TYPE_JOB = { GOING: 'going', PENDING: 'pending', EXPIRED: 'expired' };
const currentUserId = localStorage.currentUser;
export default class MyJobs extends Component {
  constructor() {
    super();
    this.state = {
      showDeleteConfirmationPopup: false,
      activeCurrent: 'on-goging',
      myJobResourceEndPoint: [],
      activeJob: 'all',
      currentUser: {},
    };
  }
  componentWillMount() {
    const url = `${config.API_BASE_URL}/users/${currentUserId}/jobs`;
    const currentUserUrl = `${config.API_BASE_URL}/users/${currentUserId}`;
    axios.get(url).then((response) => this.setState({ myJobResourceEndPoint: response.data }));
    axios.get(currentUserUrl).then((response) => this.setState({ currentUser: response.data }));
  }
  getActiveJob(active) {
    if (active.includes('On-going')) {
      this.setState({ activeJob: 'going' });
    }
    if (active.includes('Pending')) {
      this.setState({ activeJob: 'pending' });
    }
    if (active.includes('Expired')) {
      this.setState({ activeJob: 'expired' });
    }
  }
  handleDeleteConfirmationPopup() {
    this.setState({ showDeleteConfirmationPopup: !this.state.showDeleteConfirmationPopup });
  }
  handleActive(value) {
    this.setState({ activeCurrent: value });
    this.getActiveJob(value);
  }
  countJobByType(array, type) {
    return array.filter((item) => item.job_type === type).length;
  }
  render() {
    const {
      showDeleteConfirmationPopup,
      activeCurrent,
      myJobResourceEndPoint,
      activeJob,
      currentUser,
    } = this.state;
    const goingJobNumber = this.countJobByType(myJobResourceEndPoint, TYPE_JOB.GOING);
    const pendingJobNumber = this.countJobByType(myJobResourceEndPoint, TYPE_JOB.PENDING);
    const expiredJobNumber = this.countJobByType(myJobResourceEndPoint, TYPE_JOB.EXPIRED);
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
          { showDeleteConfirmationPopup && <DeleteConfirmationPopup
            closeFunc={() => this.handleDeleteConfirmationPopup()}
          /> }
        </div>
        <Header />
        <div className="MyJobs-bodyContainer">
          <div className="MyJobs-MyJobsBanner">
            <EmployerProfileBanner
              showEdit={!employerProfile}
              companyName={currentUser.company_name}
              phone={currentUser.phone_number}
              email={currentUser.email}
              website={currentUser.website}
              address={currentUser.address}
              companyDescription={currentUser.company_description}
            />
          </div>
          <div className="MyJobs-contentContainer">
            <div className="MyJobs-availableJob">
              { myProfile ?
                <div className="MyJobsComponent-container">
                  <div className="MyJobsComponent-title">
                    <span className="MyJobsComponent-titleText"> My Jobs </span>
                  </div>
                  <div className="MyJobsComponent-content"> { myJobList } </div>
                </div> : 'Available Jobs' }
            </div>
            <div className="MyJobs-jobList">
              {
                (activeJob === 'all' || activeJob === 'going') ?
                  <JobList
                    onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                    showDelete={myProfile}
                    showEdit={myProfile}
                    showCity={employerProfile}
                    showView={employerProfile}
                    showShare={employerProfile}
                    title={'On-going'}
                    showImage={false}
                    jobType={'going'}
                    dataResourceEndPoint={myJobResourceEndPoint}
                  /> : null
              }
              {
                (activeJob === 'all' || activeJob === 'pending') ?
                  <JobList
                    onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                    showDelete={myProfile}
                    showEdit={myProfile}
                    showCity={employerProfile}
                    showView={employerProfile}
                    showShare={employerProfile}
                    title={'Pending'}
                    showImage={false}
                    jobType={'pending'}
                    dataResourceEndPoint={myJobResourceEndPoint}
                  /> : null
              }
              {
                (activeJob === 'all' || activeJob === 'expired') ?
                  <JobList
                    onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                    showDelete={myProfile}
                    showEdit={myProfile}
                    showCity={employerProfile}
                    showView={employerProfile}
                    showShare={employerProfile}
                    title={'Expired'}
                    showImage={false}
                    jobType={'expired'}
                    dataResourceEndPoint={myJobResourceEndPoint}
                  /> : null
              }
            </div>
            <div className="MyJobs-sideBar">
              <ShareThisProfile />
              <div className="MyJobs-googleAds250276"> <GoogleAdsense /> </div>
              <div> <Footer /> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
