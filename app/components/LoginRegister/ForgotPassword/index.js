import React, { PureComponent } from 'react';
import classNames from 'classnames';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import validator from 'validator';
import config from '../../../../config';
const params = new URLSearchParams(location.search);
const resetPasswordUrl = `${config.API_BASE_URL}/users/reset-password`;
const isChangePassword = location.pathname.includes('change-password');
const updatePasswordUrl = `${config.API_BASE_URL}/users/update-password`;
const checkUserExistUrl = `${config.API_BASE_URL}/users/check-user-exist`;
const hasChangePasswordRoute = location.pathname.includes('change-password');
const forgotPasswordIncomingUrl = `${config.BASE_URL}/user/forgot-password-incoming`;
export default class ForgotPassword extends PureComponent {
  constructor() {
    super();
    this.state = {
      isEmail: true,
      emailValue: '',
      isPassword: true,
      passwordValue: '',
      userExisted: true,
      focusEmail: false,
      shakeEffect: false,
      focusPassword: false,
      showEmailAnimation: false,
      changePasswordIsClicked: false,
    };
  }

  onSubmit = (e) => {
    if (hasChangePasswordRoute) {
      this.setState({ changePasswordIsClicked: true });
      e.preventDefault();
      axios.post(updatePasswordUrl, {
        token: params.get('token'),
        newPassword: this.password.value,
      });
    } else {
      const email = this.email.value;
      const { userExisted } = this.state;
      e.preventDefault();
      if (validator.isEmail(email) && userExisted) {
        axios.post(resetPasswordUrl, { email });
        location.replace(forgotPasswordIncomingUrl);
      } else {
        this.setState({ shakeEffect: !this.state.shakeEffect });
      }
    }
  }

  handleOnBlurEmail = (e) => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({ focusEmail: false });
    axios.post(checkUserExistUrl, { email: value }).then((response) => {
      const {
        data: {
          success,
        } = {},
      } = response;
      this.setState({
        userExisted: success,
      });
    });
    this.setState({
      isEmail: validator.isEmail(value),
    });
  }

  handleOnChangeEmail = (e) => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({
      shakeEffect: !value && value.length > 0,
      showEmailAnimation: value,
      emailValue: value,
    });
  }

  handleOnChangePassword = (e) => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({
      passwordValue: value,
      showPasswordAnimation: value,
    });
  }

  render() {
    const {
      isEmail,
      focusEmail,
      isPassword,
      userExisted,
      shakeEffect,
      emailValue,
      focusPassword,
      showEmailAnimation,
      showPasswordAnimation,
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
    const forgetFormClassNames = classNames('Signup-form', {
      'Signup-effectShake': shakeEffect,
    });
    const changePasswordText = changePasswordIsClicked ? 'Password Updated' : 'Reset Password';
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title"> { isChangePassword ? changePasswordText : 'Forgot your password' }  </div>
        { !isChangePassword &&
          <div className="ForgotPassword-abstract">{"We'll send you an email with a reset link."}</div> }
        <div className={forgetFormClassNames}>
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="Signup-inputCustom">
                { !isChangePassword ?
                  <div className="Signup-emailContainer">
                    <input
                      className="Signup-removeOutline"
                      type="text"
                      placeholder="Email"
                      ref={(ref) => (this.email = ref)}
                      onFocus={() => this.setState({ focusEmail: true })}
                      onBlur={this.handleOnBlurEmail}
                      onChange={this.handleOnChangeEmail}
                    />
                    <label htmlFor className={emailAnimation}>Email</label>
                    { (userExisted || emailValue.length === 0) ? <div
                      style={{ 'background-color': focusEmail ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    /> : emailValue.length > 0 && <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" />}
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
                        onChange={this.handleOnChangePassword}
                      /> }
                    <div className="Signup-showPasswordIcon">
                      <PasswordIcon
                        show={isPassword && true}
                        onToggle={(e) => {
                          e.preventDefault();
                          this.setState({ isPassword: !this.state.isPassword });
                        }}
                      />
                    </div>
                    { !changePasswordIsClicked && <label htmlFor className={passwordAnimation}>Password</label> }
                    <div
                      style={{ backgroundColor: focusPassword ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    />
                  </div> }
                { !changePasswordIsClicked ? <button className="Signup-button">
                  <div className="Signup-buttonText">Reset Password</div>
                </button> : <button className="Signup-button">
                  <div className="Signup-buttonText"> Back to MY PROFILE  </div>
                </button> }
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            <span className="Signup-emailValidate">
              { !userExisted && isEmail && 'This email is not found in our system. Please enter again.' }
              { !isEmail && emailValue.length > 0 && 'Please make sure you enter your email correctly!' }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

