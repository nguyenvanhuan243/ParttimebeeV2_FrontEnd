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

import React, { PureComponent, PropTypes } from 'react';
import ShowPasswordIcon from 'components/LoginRegister/GeneralComponent/ShowPasswordIcon/Loadable';

export default class FormComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    buttonText: PropTypes.string,
    showPasswordInput: PropTypes.bool,
    showEmailInput: PropTypes.bool,
  }
  render() {
    const {
      buttonText = 'Sign up FREE',
      showPasswordInput = true,
      showEmailInput = true,
    } = this.props;
    return (
      <div className="FormComponent">
        <form>
          <div className="FormComponent-inputCustom">
            { showEmailInput ?
              <span>
                <input className="FormComponent-inputHoverEmail" type="text" placeholder="Email" />
                <div className="FormComponent-separate" />
              </span> : null }
            { showPasswordInput ?
              <span>
                <div className="FormComponent-placeHolderTop">
                  Password
                </div>
                <div className="FormComponent-passwordContainer">
                  <input className="FormComponent-inputHover" type="password" placeholder="Password" />
                  <ShowPasswordIcon />
                </div>
                <div className="FormComponent-separateColor" />
              </span> : null }
            <div className="FormComponent-button">
              <input className="FormComponent-buttonInput" type="submit" value={buttonText} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
