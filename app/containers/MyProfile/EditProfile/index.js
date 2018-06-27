import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
import AskReasonPopup from 'components/Popup/AskReason/Loadable';
import SavingIcon from 'components/Icons/Saving/Loadable';
import OkayIcon from 'components/Icons/Okay/Loadable';
import classNames from 'classnames';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromHTML, ContentState, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import config from '../../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      isSubmited: false,
      showSaving: false,
      showUpdated: false,
      showErrorAlert: false,
      showAskReasonPopup: false,
      alertEmail: '',
      alertPassword: '',
      alertCompanyName: '',
      alertContactName: '',
      alertConfirmPassword: '',
      user: {},
      emailValue: '',
      contactNameValue: '',
      companyNameValue: '',
      addressValue: '',
      phoneValue: '',
      websiteValue: '',
      editorState: EditorState.createEmpty(),
    };
  }
  componentWillMount() {
    axios.get(requestUrl).then((response) => {
      this.setState({ user: response.data });
      const blocksFromHTML = convertFromHTML(this.state.user.company_description);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      this.setState({ editorState: EditorState.createWithContent(state) });
    });
  }
  onSubmit = () => {
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
      axios.put(requestUrl,
        this.buildFormData(),
      );
    }
  }
  buildFormData() {
    const formData = new FormData();
    formData.append('profile[email]', this.email.value);
    formData.append('profile[password]', this.password.value);
    formData.append('profile[confirmPassword]', this.confirmPassword.value);
    formData.append('profile[contactName]', this.contactName.value);
    formData.append('profile[companyName]', this.companyName.value);
    formData.append('profile[address]', this.address.value);
    formData.append('profile[phone]', this.phone.value);
    formData.append('profile[website]', this.website.value);
    formData.append('profile[companyDescription]', this.companyDescription.value);
    formData.append('profile[avatar]', this.avatar.files[0]);
    return formData;
  }
  handleAskReasonPopup() {
    this.setState({
      showAskReasonPopup: !this.state.showAskReasonPopup,
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
      user,
      emailValue,
      isSubmited,
      showSaving,
      showUpdated,
      alertEmail,
      alertPassword,
      passwordValue,
      confirmPasswordValue,
      contactNameValue,
      companyNameValue,
      addressValue,
      phoneValue,
      websiteValue,
      showErrorAlert,
      alertContactName,
      alertCompanyName,
      showAskReasonPopup,
      alertConfirmPassword,
    } = this.state;
    const emailLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertEmail });
    const separateEmailClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertEmail });
    const passwordLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertPassword });
    const separatePasswordClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertPassword });
    const confirmPasswordLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertConfirmPassword });
    const separateConfirmPasswordClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertConfirmPassword });
    const contactNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertContactName });
    const separateContactNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertContactName });
    const companyNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertCompanyName });
    const separateCompanyNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertCompanyName });
    const linkAvatar = user.url_avatar ? user.url_avatar : 'https://www.neolutionesport.com/wp-content/uploads/2017/03/default-avatar-knives-ninja.png';
    return (
      <div>
        <div>
          { (showAskReasonPopup || isSubmited) ?
            <AskReasonPopup
              closeAskReasonFunc={() => this.handleAskReasonPopup()}
              closePopupFunc={() => { this.handleDeleteProfile(); }}
              onSubmitFormFunc={() => this.setState({ isSubmited: true })}
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
                <div className="EditProfileForm-container">
                  <div className="EditProfileForm-lableContainer">
                    <div className="EditProfileForm-lableItem">
                      Avatar
                    </div>
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
                      <div className="EditProfileForm-avatarContainer">
                        <div className="EditProfileForm-image">
                          <img
                            className="EditProfileForm-image"
                            src={linkAvatar}
                            alt="Avatar"
                          />
                          <input
                            className="EditProfileForm-image"
                            type="file"
                            ref={(ref) => (this.avatar = ref)}
                          />
                        </div>
                        <div className="EditProfileForm-editAvatar">Edit avatar</div>
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="email"
                          ref={(ref) => (this.email = ref)}
                          value={emailValue || (user && user.email)}
                          onChange={(e) => {
                            this.setState({ emailValue: e.target.value });
                            if (emailValue === '') {
                              user.email = '';
                            }
                          }}
                        />
                        <div className={separateEmailClassName} />
                        { (alertEmail && showErrorAlert) && <div className="EditProfileForm-textError">
                          Please enter your email
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="password"
                          ref={(ref) => (this.password = ref)}
                          value={this.state.passwordValue || (user && user.password)}
                          onChange={(e) => {
                            this.setState({ passwordValue: e.target.value });
                            if (passwordValue === '') {
                              user.password = '';
                            }
                          }}
                        />
                        <div className={separatePasswordClassName} />
                        { (alertPassword && showErrorAlert) && <div className="EditProfileForm-textError">
                          Please enter your password
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="password"
                          ref={(ref) => (this.confirmPassword = ref)}
                          value={confirmPasswordValue || (user && user.password)}
                          onChange={(e) => {
                            this.setState({ confirmPasswordValue: e.target.value });
                            if (confirmPasswordValue === '') {
                              user.password = '';
                            }
                          }}
                        />
                        <div className={separateConfirmPasswordClassName} />
                        { (alertConfirmPassword && showErrorAlert) && <div className="EditProfileForm-textError">
                          Please enter your confirm password
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.contactName = ref)}
                          value={contactNameValue || (user && user.contact_name)}
                          onChange={(e) => {
                            this.setState({ contactNameValue: e.target.value });
                            if (contactNameValue === '') {
                              user.contact_name = '';
                            }
                          }}
                        />
                        <div className={separateContactNameClassName} />
                        { (alertContactName && showErrorAlert) && <div className="EditProfileForm-textError">
                          Please enter your contact name
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.companyName = ref)}
                          value={companyNameValue || (user && user.company_name)}
                          onChange={(e) => {
                            this.setState({ companyNameValue: e.target.value });
                            if (companyNameValue === '') {
                              user.company_name = '';
                            }
                          }}
                        />
                        <div className={separateCompanyNameClassName} />
                        { (alertCompanyName && showErrorAlert) && <div className="EditProfileForm-textError">
                          Please enter your company name
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.address = ref)}
                          value={addressValue || (user && user.address)}
                          onChange={(e) => {
                            this.setState({ addressValue: e.target.value });
                            if (addressValue === '') {
                              user.address = '';
                            }
                          }}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={(ref) => (this.phone = ref)}
                          value={phoneValue || (user && user.phone_number)}
                          onChange={(e) => {
                            this.setState({ phoneValue: e.target.value });
                            if (phoneValue === '') {
                              user.phone_number = '';
                            }
                          }}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          placeholder="http://"
                          type="text"
                          ref={(ref) => (this.website = ref)}
                          value={websiteValue || (user && user.website)}
                          onChange={(e) => {
                            this.setState({ websiteValue: e.target.value });
                            if (websiteValue === '') {
                              user.website = '';
                            }
                          }}
                        />
                        <div className="EditProfileForm-separate" />
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <Editor
                          editorState={this.state.editorState}
                          onFocus={() => this.setState({ focusOnDescription: true })}
                          onBlur={() => this.setState({ focusOnDescription: false })}
                          placeholder="Company Description"
                          editorRef={(ref) => (this.companyDescription = ref)}
                          wrapperClassName="EditProfileForm-wrapper"
                          editorClassName="EditProfileForm-editor"
                          onEditorStateChange={(editorState) => this.setState({ editorState })}
                          toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            fontFamily: {
                            },
                            embedded: {
                              className: undefined,
                              component: undefined,
                              popupClassName: undefined,
                              defaultSize: {
                                height: 'auto',
                                width: 'auto',
                              },
                            },
                          }}
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
                <span className="EditProfile-editButtonText">
                  UPDATE
                </span>
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
                <span className="EditProfile-deleteAccounText">
                  DELETE MY ACCOUNT
                </span>
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

