import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import EditProfileForm from 'components/EditProfile/Form/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
export default class FirstTimePostJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="FirstTimePostJob container">
        <div className="FirstTimePostJob-header">
          <Header />
        </div>
        <div className="FirstTimePostJob-container">
          <div className="FirstTimePostJob-editProfile">
            EditProfile
          </div>
          <div className="FirstTimePostJob-postJobAlert">
            <EditProfileAlert />
          </div>
          <div className="FirstTimePostJob-postJobForm">
            <EditProfileForm />
          </div>
          <div className="FirstTimePostJob-deleteMyAccount">
            <div className="FirstTimePostJob-containerDeleteAccount">
              <div className="FirstTimePostJob-title">
                DELETEMYACCOUNT
              </div>
              <div className="FirstTimePostJob-content">
                <div classNam="FirstTimePostJob-text">
                  Taking a break from Parttime Bee? Youve found the right place.
                </div>
                <div className="FirstTimePostJob-button">
                  <div className="FirstTimePostJob-buttonText">
                    CONTINUE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

