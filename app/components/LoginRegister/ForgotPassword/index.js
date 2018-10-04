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

  onSubmit = e => {
    if (hasChangePasswordRoute) {
      if (this.password.value.length < 6) {
        this.setState({
          shakeEffect: true,
        });
      }
      e.preventDefault();
      axios.post(updatePasswordUrl, {
        token: params.get('token'),
        newPassword: this.password.value,
      }).then(response => {
        this.setState({ changePasswordIsClicked: true });
        localStorage.setItem('currentUser', response.data.user.id);
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
    setTimeout(() => this.setState({ shakeEffect: false }), 100);
  }

  checkUserExist = value => {
    axios.post(checkUserExistUrl, { email: value }).then(response => {
      const {
        data: {
          success,
        } = {},
      } = response;
      this.setState({
        userExisted: success,
      });
    });
  }

  handleOnBlurEmail = e => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.checkUserExist(value);
    this.setState({ focusEmail: false, isEmail: validator.isEmail(value) });
  }

  handleOnChangeEmail = e => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({
      emailValue: value,
      showEmailAnimation: value,
      shakeEffect: !value && value.length > 0,
    });
    this.checkUserExist(value);
  }

  handleOnChangePassword = e => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({
      passwordValue: value,
      showPasswordAnimation: value,
      changePasswordIsClicked: false,
    });
  }

  handleBackToProfile = e => {
    e.preventDefault();
    location.replace(`${config.BASE_URL}/myprofile/my-profile`);
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
      passwordValue,
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
    const changePasswordText = (changePasswordIsClicked && passwordValue.length >= 6) ? 'Password Updated' : 'Reset Password';
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
                      ref={ref => (this.email = ref)}
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
                    { (!changePasswordIsClicked || passwordValue.length < 6) &&
                      <div>
                        <input
                          className="Signup-removeOutline"
                          type={isPassword ? 'password' : 'text'}
                          placeholder="Password"
                          ref={ref => (this.password = ref)}
                          onFocus={() => this.setState({ focusPassword: true })}
                          onBlur={() => this.setState({ focusPassword: false })}
                          onChange={this.handleOnChangePassword}
                        />
                        <div className="Signup-showPasswordIcon">
                          <PasswordIcon
                            show={isPassword && true}
                            onToggle={e => {
                              e.preventDefault();
                              this.setState({ isPassword: !this.state.isPassword });
                            }}
                          />
                        </div>
                      </div>
                    }
                    { !changePasswordIsClicked && <label htmlFor className={passwordAnimation}>Password</label> }
                    { changePasswordIsClicked && passwordValue.length >= 6 ?
                      null : <div
                        style={{ backgroundColor: focusPassword ? '#ffaa00' : '#e8e8e8' }}
                        className="Signup-separate"
                      />
                    }
                  </div> }
                { (!changePasswordIsClicked || passwordValue.length < 6) ? <button className="Signup-button">
                  <div className="Signup-buttonText">Reset Password</div>
                </button> : <button onClick={this.handleBackToProfile} className="Signup-button">
                  <div className="Signup-buttonText"> Back to MY PROFILE  </div>
                </button> }
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            { !isChangePassword ?
              <span className="Signup-emailValidate">
                { !userExisted && isEmail && 'This email is not found in our system. Please enter again.' }
                { !isEmail && emailValue.length > 0 && 'Please make sure you enter your email correctly!' }
              </span> :
              <span style={{ marginTop: '10px' }} className="Signup-passwordValidate">
                { focusPassword ? 'Type 6 characters or more.' : null }
                { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 ? 'Type 6 characters or more.' : null }
              </span> }
          </div>
        </div>
      </div>
    );
  }
}

