import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
import AskReasonPopup from 'components/Popup/AskReason/Loadable';
import SavingIcon from 'components/Icons/Saving/Loadable';
import OkayIcon from 'components/Icons/Okay/Loadable';
import classNames from 'classnames';
import axios from 'axios';
import config from '../../../../config';

export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      showAskReasonPopup: false,
      isSubmited: false,
      showSaving: false,
      showUpdated: false,
      showErrorAlert: false,
      alertEmail: '',
      alertPassword: '',
      alertConfirmPassword: '',
      alertCompanyName: '',
      alertContactName: '',
    };
  }
  onSubmit = () => {
    const userId = localStorage.currentUser;
    const requestUrl = `${config.API_BASE_URL}/users/${userId}`;
    if (this.email.value === '' || this.password.value === '' || this.confirmPassword.value === '' ||
        this.companyName.value === '' || this.contactName.value === '') {
      this.setState({
        showErrorAlert: true,
      });
      if (this.email.value === '') {
        this.setState({ alertEmail: 'Email' });
      } else {
        this.setState({ alertEmail: '' });
      }
      if (this.password.value === '') {
        this.setState({ alertPassword: 'Password' });
      } else {
        this.setState({ alertPassword: '' });
      }
      if (this.confirmPassword.value === '') {
        this.setState({ alertConfirmPassword: 'Confirm Password' });
      } else {
        this.setState({ alertConfirmPassword: '' });
      }
      if (this.contactName.value === '') {
        this.setState({ alertContactName: 'Contact Name' });
      } else {
        this.setState({ alertContactName: '' });
      }
      if (this.companyName.value === '') {
        this.setState({ alertCompanyName: 'Company Name' });
      } else {
        this.setState({ alertCompanyName: '' });
      }
    } else {
      this.setState({
        showSaving: true,
        showUpdated: false,
        showErrorAlert: false,
      });
      setTimeout(() => this.setState({
        showUpdated: true,
        showSaving: false,
      }), 2000);
      axios.put(requestUrl, {
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value,
        contactName: this.contactName.value,
        companyName: this.companyName.value,
        address: this.address.value,
        phone: this.phone.value,
        website: this.website.value,
        companyDescription: this.companyDescription.value,
      });
    }
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
      showSaving,
      showUpdated,
      showErrorAlert,
      alertEmail,
      alertPassword,
      alertConfirmPassword,
      alertContactName,
      alertCompanyName,
    } = this.state;
    const emailLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertEmail,
    });
    const separateEmailClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertEmail,
    });

    const passwordLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertPassword,
    });
    const separatePasswordClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertPassword,
    });

    const confirmPasswordLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertConfirmPassword,
    });
    const separateConfirmPasswordClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertConfirmPassword,
    });

    const contactNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertContactName,
    });
    const separateContactNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertContactName,
    });

    const companyNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertCompanyName,
    });
    const separateCompanyNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertCompanyName,
    });
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
            { showErrorAlert ? <div className="EditProfile-alert">
              <EditProfileAlert
                showEmail={alertEmail}
                showPassword={alertPassword}
                showConfirmPassword={alertConfirmPassword}
                showContactName={alertContactName}
                showCompanyName={alertCompanyName}
              />
            </div> : null }
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
                    <div className={emailLableClassName}>
                      Email
                    </div>
                    <div className={passwordLableClassName}>
                      Password
                    </div>
                    <div className={confirmPasswordLableClassName}>
                      Confirm Password
                    </div>
                    <div className={contactNameLableClassName}>
                      Contact Name
                    </div>
                    <div className={companyNameLableClassName}>
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
                    <form id="editForm">
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="email"
                          ref={(ref) => (this.email = ref)}
                        />
                        <div className={separateEmailClassName} />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.password = ref)}
                        />
                        <div className={separatePasswordClassName} />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.confirmPassword = ref)}
                        />
                        <div className={separateConfirmPasswordClassName} />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.contactName = ref)}
                        />
                        <div className={separateContactNameClassName} />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.companyName = ref)}
                        />
                        <div className={separateCompanyNameClassName} />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.address = ref)}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.phone = ref)}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          placeholder="http://"
                          type="text"
                          ref={(ref) => (this.website = ref)}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="aria"
                          ref={(ref) => (this.companyDescription = ref)}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="EditProfile-editContainer">
              <button
                className="EditProfile-editButton"
                onClick={() => (document.getElementById('editForm').onSubmit = this.onSubmit())}
              >
                Edit
              </button>
              { showSaving ?
                <div className="EditProfile-savingContainer">
                  <div className="EditProfile-savingIcon">
                    <SavingIcon />
                  </div>
                  <div className="EditProfile-savingText">
                    SAVING…
                  </div>
                </div> : null }
              { showUpdated ? <div className="EditProfile-oKayContainer">
                <div className="EditProfile-oKayIcon">
                  <OkayIcon />
                </div>
                <div className="EditProfile-oKayText">
                  UPDATED!
                </div>
              </div> : null }
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

