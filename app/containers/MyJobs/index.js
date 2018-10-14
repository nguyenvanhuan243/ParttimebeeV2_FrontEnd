import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import Item from 'components/MyJobsComponent/Item/Loadable';
import EmployerProfileBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAdsense from 'components/GoogleAdsense/Loadable';
import Footer from 'components/Footer/Loadable';
import DeleteConfirmationPopup from 'components/Popup/DeleteConfirmation/Loadable';
import NoJobsYet from 'components/MyJobsComponent/NoJobsYet/Loadable';
import axios from 'axios';
import { groupBy, values } from 'lodash';
import moment from 'moment';
import config from '../../../config';

const JOB_TYPE = { GOING: 'going', PENDING: 'pending', EXPIRED: 'expired' };
const userIdFromPathName = location.pathname.match(/\d+/) && location.pathname.match(/\d+/)[0];
const employerProfile = location.pathname.includes('employer-profile');
const currentUserId = localStorage.currentUser || userIdFromPathName;
const firstTimePostJobUrl = location.pathname.includes('first-time-post-job');
const url = `${config.API_BASE_URL}/users/${currentUserId}/jobs`;
const currentUserUrl = `${config.API_BASE_URL}/users/${currentUserId}`;
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
    axios.get(url).then(response => this.setState({ myJobResourceEndPoint: response.data }));
    axios.get(currentUserUrl).then(response => this.setState({ currentUser: response.data }));
  }

  getActiveJob = active => {
    if (active.includes('On-going')) {
      this.setState({ activeJob: JOB_TYPE.GOING });
    }
    if (active.includes('Pending')) {
      this.setState({ activeJob: JOB_TYPE.PENDING });
    }
    if (active.includes('Expired')) {
      this.setState({ activeJob: JOB_TYPE.EXPIRED });
    }
  }

  handleDeleteConfirmationPopup = () => {
    this.setState({ showDeleteConfirmationPopup: !this.state.showDeleteConfirmationPopup });
  }

  handleActive = value => {
    this.setState({ activeCurrent: value });
    this.getActiveJob(value);
  }

  countJobByType = (array, type) => array.filter(item => item.job_type === type).length;

  renderAfterGroupBy = object => (
    values(object).map((item, index) => (
      <JobList
        key={index.toString()}
        dataResourceEndPoint={item}
        size={employerProfile ? 645 : 580}
        title={moment(item[0].created_at).format('dddd, MMMM DD')}
      />
    ))
  );

  render() {
    const {
      activeJob,
      currentUser,
      activeCurrent,
      myJobResourceEndPoint,
      showDeleteConfirmationPopup,
    } = this.state;
    const goingJobNumber = this.countJobByType(myJobResourceEndPoint, JOB_TYPE.GOING);
    const pendingJobNumber = this.countJobByType(myJobResourceEndPoint, JOB_TYPE.PENDING);
    const expiredJobNumber = this.countJobByType(myJobResourceEndPoint, JOB_TYPE.EXPIRED);
    const myJobList = [];
    const textArray = [
      `${goingJobNumber} On-going ${goingJobNumber > 1 ? 'jobs' : 'job'}`,
      `${pendingJobNumber} Pending ${pendingJobNumber > 1 ? 'jobs' : 'job'}`,
      `${expiredJobNumber} Expired ${expiredJobNumber > 1 ? 'jobs' : 'job'}`,
    ];
    const myProfile = location.pathname.includes('my-profile') || location.pathname.includes('myjobs/myjobs');
    const marginLeftStyle = employerProfile ? '20px' : '93px';
    const style = {
      marginLeft: myJobResourceEndPoint.length === 0 ? '0' : marginLeftStyle,
    };
    myJobList.push(textArray.map(value =>
      <Item key={value} onActive={() => this.handleActive(value)} text={value} active={activeCurrent === value} />));
    let dataFiltered = [];
    dataFiltered = myJobResourceEndPoint.filter(item => item.job_type === 'going');
    const groupByCreatedAt = groupBy(dataFiltered,
      itemFiltered => itemFiltered.created_at.substring(0, 10));
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
              urlAvatar={currentUser.url_avatar}
            />
          </div>
          <div className="MyJobs-contentContainer">
            { myJobResourceEndPoint.length !== 0 &&
              <div className="MyJobs-availableJob">
                { myProfile ?
                  <div className="MyJobsComponent-container">
                    <div className="MyJobsComponent-title">
                      <span className="MyJobsComponent-titleText"> My Jobs </span>
                    </div>
                    { myJobResourceEndPoint.length !== 0 ?
                      <div className="MyJobsComponent-content"> { myJobList } </div> : null }
                  </div> : (!firstTimePostJobUrl && 'Available Jobs') }
              </div>
            }
            { employerProfile &&
              <div style={style}>
                { this.renderAfterGroupBy(groupByCreatedAt) }
              </div>
            }
            { ((myJobResourceEndPoint.length === 0 && !employerProfile) || firstTimePostJobUrl) ?
              <div style={style}>
                <NoJobsYet />
              </div> :
              <div style={style}>
                {
                  (activeJob === 'all' || activeJob === 'going') && !employerProfile ?
                    <JobList
                      onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                      showDelete={myProfile}
                      showEdit={myProfile}
                      showCity={employerProfile}
                      showView={employerProfile}
                      showShare={employerProfile}
                      title={'On-going'}
                      showImage={employerProfile}
                      jobType={'going'}
                      dataResourceEndPoint={myJobResourceEndPoint}
                      size={employerProfile ? 645 : 580}
                    /> : null
                }
                {
                  ((activeJob === 'all' || activeJob === 'pending') && !employerProfile && localStorage.currentUser) ?
                    <JobList
                      onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                      showDelete={myProfile}
                      showEdit={myProfile}
                      showCity={employerProfile}
                      showView={employerProfile}
                      showShare={employerProfile}
                      title={'Pending'}
                      showImage={employerProfile}
                      jobType={'pending'}
                      dataResourceEndPoint={myJobResourceEndPoint}
                      size={employerProfile ? 645 : 580}
                    /> : null
                }
                {
                  ((activeJob === 'all' || activeJob === 'expired') && !employerProfile && localStorage.currentUser) ?
                    <JobList
                      onDeleteConfirmation={() => this.handleDeleteConfirmationPopup()}
                      showDelete={myProfile}
                      showEdit={myProfile}
                      showCity={employerProfile}
                      showView={employerProfile}
                      showShare={employerProfile}
                      title={'Expired'}
                      showImage={employerProfile}
                      jobType={'expired'}
                      dataResourceEndPoint={myJobResourceEndPoint}
                      size={employerProfile ? 645 : 580}
                    /> : null
                }
              </div>}
            <div className="MyJobs-sideBar">
              { myJobResourceEndPoint.length > 0 && !firstTimePostJobUrl && <ShareThisProfile /> }
              <GoogleAdsense />
              <div> <Footer /> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
