import React, { PureComponent } from 'react';
import classNames from 'classnames';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import validator from 'validator';
import config from '../../../../config';

const params = new URLSearchParams(location.search);
const isChangePassword = location.pathname.includes('change-password');
const hasChangePasswordRoute = location.pathname.includes('change-password');
export default class ForgotPassword extends PureComponent {
  constructor() {
    super();
    this.state = {
      isEmail: true,
      emailValue: '',
      userExisted: true,
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
    if (hasChangePasswordRoute) {
      this.setState({ changePasswordIsClicked: true });
      e.preventDefault();
      axios.post(`${config.API_BASE_URL}/users/update-password`, {
        token: params.get('token'),
        newPassword: this.password.value,
      });
    } else {
      const email = this.email.value;
      const { userExisted } = this.state;
      e.preventDefault();
      if (validator.isEmail(email) && userExisted) {
        axios.post(`${config.API_BASE_URL}/users/reset-password`, { email });
        location.replace(`${config.BASE_URL}/user/forgot-password-incoming`);
      } else {
        this.setState({ shakeEffect: !this.state.shakeEffect });
      }
    }
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
    const changePasswordText = changePasswordIsClicked ? 'Password Updated' : 'Change Password';
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title"> { isChangePassword ? changePasswordText : 'Forgot your password' }  </div>
        { !isChangePassword &&
          <div className="ForgotPassword-abstract"> We`ll send you an email with a reset link. </div> }
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
                      onBlur={(e) => {
                        this.setState({ focusEmail: false });
                        const url = `${config.API_BASE_URL}/users/check-user-exist`;
                        axios.post(url, { email: e.target.value }).then((response) => {
                          this.setState({ userExisted: response.data.success });
                        });
                        this.setState({ isEmail: validator.isEmail(e.target.value) });
                      }}
                      onChange={(e) => this.setState({
                        shakeEffect: !e.target.value,
                        showEmailAnimation: e.target.value,
                        emailValue: e.target.value,
                      })}
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
                        onChange={(e) => this.setState({ passwordValue: e.target.value, showPasswordAnimation: e.target.value })}
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
                  <div className="Signup-buttonText"> { isChangePassword ? 'Change Password' : 'Reset Password' }  </div>
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

