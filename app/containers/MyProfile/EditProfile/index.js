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
import {
  DefaultAvatar1,
  DefaultAvatar2,
  DefaultAvatar3,
  DefaultAvatar4,
  DefaultAvatar5,
  DefaultAvatar6,
  DefaultAvatar7,
  DefaultAvatar8,
  DefaultAvatar9,
  DefaultAvatar10,
  DefaultAvatar11,
  DefaultAvatar12,
  DefaultAvatar13,
  DefaultAvatar14,
  DefaultAvatar15,
  DefaultAvatar16,
  DefaultAvatar17,
  DefaultAvatar18,
  DefaultAvatar19,
  DefaultAvatar20,
  DefaultAvatar21,
  DefaultAvatar22,
  DefaultAvatar23,
  DefaultAvatar24,
  DefaultAvatar25,
  DefaultAvatar26,
  DefaultAvatar27,
  DefaultAvatar28,
  DefaultAvatar29,
  DefaultAvatar30,
  DefaultAvatar31,
  DefaultAvatar32,
  DefaultAvatar33,
  DefaultAvatar34,
  DefaultAvatar35,
  DefaultAvatar36,
  DefaultAvatar37,
  DefaultAvatar38,
  DefaultAvatar39,
  DefaultAvatar40,
  DefaultAvatar41,
  DefaultAvatar42,
  DefaultAvatar43,
  DefaultAvatar44,
  DefaultAvatar45,
  DefaultAvatar46,
  DefaultAvatar47,
  DefaultAvatar48,
  DefaultAvatar49,
  DefaultAvatar50,
} from 'components/DefaultAvatar';
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

  getDefaultAvatar = user => {
    if (!isEmpty(user)) {
      if (user.default_avatar.includes('1')) {
        return <DefaultAvatar1 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('2')) {
        return <DefaultAvatar2 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('3')) {
        return <DefaultAvatar3 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('4')) {
        return <DefaultAvatar4 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('5')) {
        return <DefaultAvatar5 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('6')) {
        return <DefaultAvatar6 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('7')) {
        return <DefaultAvatar7 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('8')) {
        return <DefaultAvatar8 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('9')) {
        return <DefaultAvatar9 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('10')) {
        return <DefaultAvatar10 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('11')) {
        return <DefaultAvatar11 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('12')) {
        return <DefaultAvatar12 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('13')) {
        return <DefaultAvatar13 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('14')) {
        return <DefaultAvatar14 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('15')) {
        return <DefaultAvatar15 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('16')) {
        return <DefaultAvatar16 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('17')) {
        return <DefaultAvatar17 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('19')) {
        return <DefaultAvatar18 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('19')) {
        return <DefaultAvatar19 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('20')) {
        return <DefaultAvatar20 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('21')) {
        return <DefaultAvatar21 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('22')) {
        return <DefaultAvatar22 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('23')) {
        return <DefaultAvatar23 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('24')) {
        return <DefaultAvatar24 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('25')) {
        return <DefaultAvatar25 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('26')) {
        return <DefaultAvatar26 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('27')) {
        return <DefaultAvatar27 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('28')) {
        return <DefaultAvatar28 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('29')) {
        return <DefaultAvatar29 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('30')) {
        return <DefaultAvatar30 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('31')) {
        return <DefaultAvatar31 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('32')) {
        return <DefaultAvatar32 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('33')) {
        return <DefaultAvatar33 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('34')) {
        return <DefaultAvatar34 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('35')) {
        return <DefaultAvatar35 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('36')) {
        return <DefaultAvatar36 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('37')) {
        return <DefaultAvatar37 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('38')) {
        return <DefaultAvatar38 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('39')) {
        return <DefaultAvatar39 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('40')) {
        return <DefaultAvatar40 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('41')) {
        return <DefaultAvatar41 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('42')) {
        return <DefaultAvatar42 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('43')) {
        return <DefaultAvatar43 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('44')) {
        return <DefaultAvatar44 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('45')) {
        return <DefaultAvatar45 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('46')) {
        return <DefaultAvatar46 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('47')) {
        return <DefaultAvatar47 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('48')) {
        return <DefaultAvatar48 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('49')) {
        return <DefaultAvatar49 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
      if (user.default_avatar.includes('50')) {
        return <DefaultAvatar50 avatarWidth={'60px'} avatarHeight={'60px'} />;
      }
    }
    return <DefaultAvatar1 />;
  }

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

