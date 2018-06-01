import React, { PureComponent } from 'react';
export default class EditProfileForm extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" placeholder="http://" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
              <div className="EditProfileForm-lableItem">
                <input className="EditProfileForm-inputHoverEmail" type="aria" />
                <div className="EditProfileForm-separate" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
