import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import Item from 'components/MyJobsComponent/Item/Loadable';
import EmployerProfileBanner from 'components/EmployerProfileBanner/Loadable';
import JobList from 'components/JobList/Loadable';
import ShareThisProfile from 'components/ShareThisProfile/Loadable';
import GoogleAds250276 from 'components/Advertiments/GoogleAds250276/Loadable';
import Footer from 'components/Footer/Loadable';
import DeleteConfirmationPopup from 'components/Popup/DeleteConfirmation/Loadable';

export default class MyJobs extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showDeleteConfirmationPopup: false,
      activeCurrent: 'on-goging',
    };
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
    } = this.state;
    const myJobList = [];
    const textArray = [
      '10 On-going jobs',
      '1 Pending job',
      '99 Expired jobs',
    ];
    const myProfile = location.pathname.includes('my-profile');
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
              />
            </div>
            <div className="MyJobs-sideBar">
              <ShareThisProfile />
              <div className="MyJobs-googleAds250276">
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
