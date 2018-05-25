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
              Address(optional)
            </div>
            <div className="EditProfileForm-lableItem">
              Phone(optional)
            </div>
            <div className="EditProfileForm-lableItem">
              Website(optional)
            </div>
            <div className="EditProfileForm-lableItem">
              Company Description (optional)
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
                <input className="EditProfileForm-inputHoverEmail" type="text" />
                <div className="EditProfileForm-separate" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
