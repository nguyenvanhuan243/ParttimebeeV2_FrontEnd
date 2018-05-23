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
import AskReasonPopup from 'components/Popup/AskReason/Loadable';

export default class EditProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showAskReasonPopup: false,
      isSubmited: false,
    };
  }
  handleAskReasonPopup() {
    this.setState({
      showAskReasonPopup: !this.state.showAskReasonPopup,
    });
  }
  handleSubmitForm() {
    this.setState({
      isSubmited: true,
    });
  }
  handleDeleteProfile() {
    this.setState({
      showAskReasonPopup: false,
      isSubmited: false,
    });
  }
  render() {
    const {
      showAskReasonPopup,
      isSubmited,
    } = this.state;
    return (
      <div>
        <div>
          { (showAskReasonPopup || isSubmited) ?
            <AskReasonPopup
              closeAskReasonFunc={() => this.handleAskReasonPopup()}
              closePopupFunc={() => { this.handleDeleteProfile(); }}
              onSubmitFormFunc={() => this.handleSubmitForm()}
            /> : null }
        </div>
        <div className="EditProfile container">
          <div className="EditProfile-header">
            <Header />
          </div>
          <div className="EditProfile-container">
            <div className="EditProfile-editProfile">
              Edit Profile
            </div>
            <div className="EditProfile-postJobForm">
              <EditProfileForm />
            </div>
            <div className="EditProfile-deleteMyAccount">
              <div className="EditProfile-deleteAccountContainer col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="EditProfile-deleteAccounText">
                  DELETE MY ACCOUNT
                </div>
                <div className="EditProfile-abstract">
                  Taking a break from Parttime Bee? Youve found the right place.
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="EditProfile-buttonTextContainer">
                  <button onClick={() => this.handleAskReasonPopup()} className="EditProfile-buttonText">
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

