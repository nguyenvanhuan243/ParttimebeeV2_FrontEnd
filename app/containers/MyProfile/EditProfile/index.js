import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
import AskReasonPopup from 'components/Popup/AskReason/Loadable';

export default class EditProfile extends Component {
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
        <div>
          <Header />
          <div className="EditProfile-container">
            <div className="EditProfile-editProfile">
              Edit Profile
            </div>
            <div className="EditProfile-alert">
              <EditProfileAlert />
            </div>
            <div className="EditProfile-postJobForm">
              <div className="EditProfileForm">
                <div className="EditProfileForm-avatarContainer">
                  <div className="EditProfileForm-avatar">
                    Avatar
                  </div>
                  <div className="EditProfileForm-image">
                  </div>
                  <div className="EditProfileForm-editAvatar">
                    Edit avatar
                  </div>
                </div>
                <div className="EditProfileForm-container">
                  <div className="EditProfileForm-lableContainer">
                    <div className="EditProfileForm-lableItem">
                      Email
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Password
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Confirm Password
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Contact Name
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Company Name
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Address<span className="EditProfileForm-optionInput">(optional)</span>
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Phone<span className="EditProfileForm-optionInput">(optional)</span>
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Website<span className="EditProfileForm-optionInput">(optional)</span>
                    </div>
                    <div className="EditProfileForm-lableItem">
                      Company Description <span className="EditProfileForm-optionInput">(optional)</span>
                    </div>
                  </div>
                  <div className="EditProfileForm-inputContainer">
                    <form>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          placeholder="http://"
                          type="text"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="aria"
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="EditProfile-deleteMyAccount">
              <div className="EditProfile-deleteAccountContainer">
                <div className="EditProfile-deleteAccounText">
                  DELETE MY ACCOUNT
                </div>
                <div className="EditProfile-abstract">
                  Taking a break from Parttime Bee? Youve found the right place.
                </div>
              </div>
              <div className="EditProfile-buttonTextContainer">
                <button onClick={() => this.handleAskReasonPopup()} className="EditProfile-buttonText">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

