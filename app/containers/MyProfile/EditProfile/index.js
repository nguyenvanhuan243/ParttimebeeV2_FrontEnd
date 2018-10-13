import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import EditProfileAlert from 'components/EditProfile/Alert/Loadable';
import AskReasonPopup from 'components/Popup/AskReason/Loadable';
import SavingIcon from 'components/Icons/Saving/Loadable';
import OkayIcon from 'components/Icons/Okay/Loadable';
import WarningIcon from 'components/Icons/Warning/Loadable';
import classNames from 'classnames';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromHTML, ContentState, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import DefaultAvatar from 'components/DefaultAvatar/DefaultAvatar/Loadable';
import axios from 'axios';
import { isEmpty } from 'lodash';
import config from '../../../../config';

const requestUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;
export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      phoneValue: '',
      alertEmail: '',
      emailValue: '',
      addressValue: '',
      websiteValue: '',
      contactNameValue: '',
      companyNameValue: '',
      alertCompanyName: '',
      alertContactName: '',
      isSubmited: false,
      showSaving: false,
      showUpdated: false,
      showErrorAlert: false,
      showAskReasonPopup: false,
      editorState: EditorState.createEmpty(),
    };
  }

  componentWillMount() {
    axios.get(requestUrl).then(response => {
      this.setState({ user: response.data });
      const blocksFromHTML = convertFromHTML(this.state.user.company_description);
      if (!isEmpty(blocksFromHTML.contentBlocks)) {
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.entityMap,
          blocksFromHTML.contentBlocks
        );
        this.setState({ editorState: EditorState.createWithContent(state) });
      }
    });
  }

  onSubmit = () => {
    if (isEmpty(this.email.value) || isEmpty(this.companyName.value) || isEmpty(this.contactName.value)) {
      this.setState({
        showErrorAlert: true,
        alertEmail: isEmpty(this.email.value),
        alertContactName: isEmpty(this.contactName.value),
        alertCompanyName: isEmpty(this.companyName.value),
      });
    } else {
      this.setState({ showSaving: true, showUpdated: false, showErrorAlert: false });
      setTimeout(() => {
        this.setState({ showUpdated: true, showSaving: false });
        setTimeout(() => location.reload(), 2000);
      }, 2000);
      axios.put(requestUrl,
        this.buildFormData(),
      );
    }
  }

  getDefaultAvatar = user => (
    <DefaultAvatar avatarHeight={'60px'} avatarWidth={'60px'} defaultAvatarNumber={user.default_avatar} />
  );

  handleAskReasonPopup() {
    this.setState({
      showAskReasonPopup: !this.state.showAskReasonPopup,
    });
  }

  handleDeleteProfile() {
    this.setState({
      isSubmited: false,
      showAskReasonPopup: false,
    });
  }

  buildFormData() {
    const formData = new FormData();
    formData.append('profile[email]', this.email.value);
    formData.append('profile[phone]', this.phone.value);
    formData.append('profile[address]', this.address.value);
    formData.append('profile[website]', this.website.value);
    formData.append('profile[avatar]', this.avatar.files[0]);
    formData.append('profile[contactName]', this.contactName.value);
    formData.append('profile[companyName]', this.companyName.value);
    formData.append('profile[companyDescription]', this.companyDescription.editor.innerHTML);
    return formData;
  }

  render() {
    const {
      user,
      emailValue,
      isSubmited,
      showSaving,
      showUpdated,
      alertEmail,
      contactNameValue,
      companyNameValue,
      addressValue,
      phoneValue,
      websiteValue,
      showErrorAlert,
      alertContactName,
      alertCompanyName,
      showAskReasonPopup,
    } = this.state;
    const emailLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertEmail });
    const separateEmailClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertEmail });
    const contactNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertContactName });
    const separateContactNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertContactName });
    const companyNameLableClassName = classNames('EditProfileForm-lableItem', {
      'EditProfile-errorLable': alertCompanyName });
    const separateCompanyNameClassName = classNames('EditProfileForm-separate', {
      'EditProfile-errorSeparate': alertCompanyName });
    return (
      <div>
        <div>
          { (showAskReasonPopup || isSubmited) &&
            <AskReasonPopup
              closeAskReasonFunc={() => this.handleAskReasonPopup()}
              closePopupFunc={() => { this.handleDeleteProfile(); }}
              onSubmitFormFunc={() => this.setState({ isSubmited: true })}
            /> }
        </div>
        <div>
          <Header />
          <div className="EditProfile-container">
            <div className="EditProfile-editProfile">
              Edit Profile
            </div>
            { false && <div className="EditProfile-alert">
              <EditProfileAlert
                showEmail={alertEmail}
                showContactName={alertContactName}
                showCompanyName={alertCompanyName}
              />
            </div> }
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
                          { user.url_avatar ?
                            <img
                              className="EditProfileForm-image"
                              alt="Avatar"
                              src={user.url_avatar}
                            /> : this.getDefaultAvatar(user) }
                          <input
                            className="EditProfileForm-image"
                            type="file"
                            ref={ref => (this.avatar = ref)}
                          />
                        </div>
                        <div className="EditProfileForm-editAvatar">
                          Edit avatar
                        </div>
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="email"
                          ref={ref => (this.email = ref)}
                          value={emailValue || (user && user.email)}
                          onChange={e => {
                            this.setState({ emailValue: e.target.value });
                            if (isEmpty(emailValue)) {
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
                          type="text"
                          ref={ref => (this.contactName = ref)}
                          value={contactNameValue || (user && user.contact_name)}
                          onChange={e => {
                            this.setState({ contactNameValue: e.target.value });
                            if (isEmpty(contactNameValue)) {
                              user.contact_name = '';
                            }
                          }}
                        />
                        <div className={separateContactNameClassName} />
                        { alertContactName && showErrorAlert && <div className="EditProfileForm-textError">
                          Please enter your contact name
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={ref => (this.companyName = ref)}
                          value={companyNameValue || (user && user.company_name)}
                          onChange={e => {
                            this.setState({ companyNameValue: e.target.value });
                            if (isEmpty(companyNameValue)) {
                              user.company_name = '';
                            }
                          }}
                        />
                        <div className={separateCompanyNameClassName} />
                        { alertCompanyName && showErrorAlert && <div className="EditProfileForm-textError">
                          Please enter your company name
                        </div> }
                      </div>
                      <div className="EditProfileForm-lableItem">
                        <input
                          className="EditProfileForm-inputHoverEmail"
                          type="text"
                          ref={ref => (this.address = ref)}
                          value={addressValue || (user && user.address)}
                          onChange={e => {
                            this.setState({ addressValue: e.target.value });
                            if (isEmpty(addressValue)) {
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
                          ref={ref => (this.phone = ref)}
                          value={phoneValue || (user && user.phone_number)}
                          onChange={e => {
                            this.setState({ phoneValue: e.target.value });
                            if (isEmpty(phoneValue)) {
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
                          ref={ref => (this.website = ref)}
                          value={websiteValue || (user && user.website)}
                          onChange={e => {
                            this.setState({ websiteValue: e.target.value });
                            if (isEmpty(websiteValue)) {
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
                          placeholder=""
                          editorRef={ref => (this.companyDescription = ref)}
                          wrapperClassName="EditProfileForm-wrapper"
                          editorClassName="EditProfileForm-editor"
                          onEditorStateChange={editorState => this.setState({ editorState })}
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
              { !showUpdated && (alertEmail || alertCompanyName || alertContactName) &&
                <div className="EditProfile-warningContainer">
                  <div className="EditProfile-warningIcon">
                    <WarningIcon />
                  </div>
                  <span className="EditProfile-warningText">
                    OOPS! Something went wrong~
                  </span>
                </div>
              }
              { showSaving &&
                <div className="EditProfile-savingContainer">
                  <div className="EditProfile-savingIcon">
                    <SavingIcon />
                  </div>
                  <div className="EditProfile-savingText">
                    SAVING…
                  </div>
                </div> }
              { showUpdated && <div className="EditProfile-oKayContainer">
                <div className="EditProfile-oKayIcon">
                  <OkayIcon />
                </div>
                <div className="EditProfile-oKayText">
                  UPDATED!
                </div>
              </div> }
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
              <button className="EditProfile-buttonTextContainer" onClick={() => this.handleAskReasonPopup()}>
                <div className="EditProfile-buttonText">
                  CONTINUE
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

