import React, { PureComponent } from 'react';
import classNames from 'classnames';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class ForgotPassword extends PureComponent {
  constructor() {
    super();
    this.state = {
      isPassword: true,
      passwordValue: '',
      focusEmail: false,
      shakeEffect: false,
      focusPassword: false,
      showEmailAnimation: false,
      changePasswordIsClicked: false,
    };
  }
  onSubmit = (e) => {
    const hasChangePasswordRoute = location.pathname.includes('change-password');
    if (hasChangePasswordRoute) {
      this.setState({ changePasswordIsClicked: true });
      e.preventDefault();
      axios.post(`${config.API_BASE_URL}/users/update-password`, {
        token: location.search.substring(7),
        newPassword: this.password.value,
      });
    } else {
      const email = this.email.value;
      e.preventDefault();
      axios.post(`${config.API_BASE_URL}/users/reset-password`, { email });
      if (email) {
        location.replace(`${config.BASE_URL}/user/forgot-password-incoming`);
      }
      if (!email) {
        this.setState({ shakeEffect: !this.state.shakeEffect });
      }
    }
  }
  handleOnchangeEmail(e) {
    if (!e.target.value) {
      this.setState({
        shakeEffect: !this.state.shakeEffect,
      });
    }
    this.setState({ showEmailAnimation: !(e.target.value === '') });
  }
  handleOnchangePassword(e) {
    this.setState({ passwordValue: e.target.value });
    this.setState({ showPasswordAnimation: !(e.target.value === '') });
  }
  render() {
    const isChangePassword = location.pathname.includes('change-password');
    const {
      focusEmail,
      showEmailAnimation,
      shakeEffect, isPassword,
      passwordValue,
      showPasswordAnimation,
      focusPassword,
      changePasswordIsClicked,
    } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    const passwordAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showPasswordAnimation,
      'Signup-animationColor': focusPassword,
    });
    const signUpClassname = classNames('Signup-inputCustom', {
      'Signup-effectShake': shakeEffect,
    });
    const changePasswordText = changePasswordIsClicked ? 'Password Updated' : 'Change Password';
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title"> { isChangePassword ? changePasswordText : 'Forgot your password' }  </div>
        { !isChangePassword &&
          <div className="ForgotPassword-abstract"> We`ll send you an email with a reset link. </div> }
        <div className="Signup-form">
          <div>
            <form onSubmit={this.onSubmit}>
              <div className={signUpClassname}>
                { !isChangePassword ?
                  <div className="Signup-emailContainer">
                    <input
                      className="Signup-removeOutline"
                      type="email"
                      placeholder="Email"
                      ref={(ref) => (this.email = ref)}
                      onFocus={() => this.setState({ focusEmail: true })}
                      onBlur={() => this.setState({ focusEmail: false })}
                      onChange={(e) => this.handleOnchangeEmail(e)}
                    />
                    <label htmlFor className={emailAnimation}>Email</label>
                    <div
                      style={{ 'background-color': focusEmail ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    />
                  </div> :
                  <div>
                    { !changePasswordIsClicked &&
                      <input
                        className="Signup-removeOutline"
                        type={isPassword ? 'password' : 'text'}
                        placeholder="Password"
                        ref={(ref) => (this.password = ref)}
                        onFocus={() => this.setState({ focusPassword: true })}
                        onBlur={() => this.setState({ focusPassword: false })}
                        onChange={(e) => this.handleOnchangePassword(e)}
                      /> }
                    { passwordValue.length ? <div className="Signup-showPasswordIcon">
                      <PasswordIcon
                        onToggle={(e) => {
                          e.preventDefault();
                          this.setState({ isPassword: !this.state.isPassword });
                        }}
                      />
                    </div> : null }
                    { !changePasswordIsClicked && <label htmlFor className={passwordAnimation}>Password</label> }
                    { changePasswordIsClicked && <div className={focusPassword ? 'Signup-separateColor' : 'Signup-separate'} /> }
                  </div> }
                { !changePasswordIsClicked ? <button className="Signup-button">
                  <div className="Signup-buttonText"> { isChangePassword ? 'Change Password' : 'Reset Password' }  </div>
                </button> : <button className="Signup-button">
                  <div className="Signup-buttonText"> Back to MY PROFILE  </div>
                </button> }
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            <span className="Signup-emailValidate">
              { focusEmail ? 'This email is not found in our system. Please enter again.' : null }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

