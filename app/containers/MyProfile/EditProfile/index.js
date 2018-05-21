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
import EditProfileForm from 'components/EditProfile/Form/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
export default class EditProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EditProfile">
        <div className="EditProfile-header">
          <Header />
        </div>
        <div className="EditProfile-container">
          <div className="EditProfile-editProfile">
            EditProfile
          </div>
          <div className="EditProfile-postJobAlert">
            <EditProfileAlert />
          </div>
          <div className="EditProfile-postJobForm">
            <EditProfileForm />
          </div>
          <div className="EditProfile-deleteMyAccount">
            <div className="EditProfile-containerDeleteAccount">
              <div className="EditProfile-title">
                DELETEMYACCOUNT
              </div>
              <div className="EditProfile-content">
                <div classNam="EditProfile-text">
                  Taking a break from Parttime Bee? Youve found the right place.
                </div>
                <div className="EditProfile-button">
                  <div className="EditProfile-buttonText">
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

