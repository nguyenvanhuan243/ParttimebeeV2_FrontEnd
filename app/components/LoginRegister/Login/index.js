import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import validator from 'validator';
import classNames from 'classnames';
import { isMac } from '../../../utils/operatingSystem';
import config from '../../../../config';

const params = new URLSearchParams(location.search);
export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      passwordValue: '',
      danger: false,
      isEmail: true,
      success: false,
      isPassword: true,
      userExisted: true,
      focusEmail: false,
      shakeEffect: false,
      focusPassword: false,
      disposableEmail: false,
      showEmailAnimation: false,
      loginEmailState: params.get('email'),
    };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
    const { disposableEmail, userExisted } = this.state;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/sessions?email=${email}&password=${password}`;
    if (validator.isEmail(email) && password.length >= 6 && !disposableEmail) {
      axios.post(url).then((response) => {
        this.setState({ success: response === 201 });
        localStorage.setItem('currentUser', response.data.user.id);
        window.location.replace(`${config.BASE_URL}`);
      }).catch((error) => {
        this.setState({ danger: error.response.status === 422 });
      });
    }
    if (!email || !password || !userExisted || password.length < 6) {
      this.setState({ shakeEffect: true });
    }
    setTimeout(() => this.setState({ shakeEffect: false }), 200);
  }
  render() {
    const {
      isEmail,
      focusEmail,
      isPassword,
      shakeEffect,
      userExisted,
      emailValue,
      passwordValue,
      focusPassword,
      disposableEmail,
      loginEmailState,
      showEmailAnimation,
      showPasswordAnimation,
    } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    const passwordAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showPasswordAnimation,
      'Signup-animationColor': focusPassword,
    });
    const loginHaveAccountClassNames = classNames('Login-haveAccount', {
      'Login-haveAccountMacOs': isMac(),
    });
    const loginFormClassNames = classNames('Login-form', {
      'Signup-effectShake': shakeEffect,
    });
    return (
      <div className="Login">
        <DashlineIcon />
        <div className="Login-title"> Great to see you again! </div>
        <div className={loginFormClassNames}>
          <div className="Login-container">
            <form onSubmit={this.onSubmit}>
              <div className="Signup-inputCustom">
                <div className="Signup-emailContainer">
                  <input
                    className="Signup-removeOutline"
                    type="text"
                    placeholder="Email"
                    value={loginEmailState}
                    ref={(ref) => (this.email = ref)}
                    onFocus={() => this.setState({ focusEmail: true })}
                    onBlur={(e) => {
                      this.setState({ focusEmail: false, emailValue: e.target.value });
                      if (!validator.isEmail(e.target.value)) {
                        this.setState({ isEmail: false });
                      } else {
                        const url = `${config.API_BASE_URL}/users/check-user-exist`;
                        axios.post(url, { email: e.target.value }).then((response) => {
                          this.setState({ userExisted: response.data.success && true });
                        });
                        this.setState({ isEmail: true });
                      }
                      const disposableUrl = `${config.API_BASE_URL}/disposable-email/check`;
                      axios.post(disposableUrl, { email: e.target.value }).then((response) => {
                        this.setState({ disposableEmail: response.data.success });
                      });
                    }}
                    onChange={(e) => this.setState({
                      showEmailAnimation: e.target.value,
                      loginEmailState: e.target.value,
                    })}
                  />
                  <label htmlFor className={emailAnimation}>Email</label>
                  { ((isEmail && userExisted && !disposableEmail) || emailValue.length === 0) &&
                    <div
                      style={{ backgroundColor: focusEmail ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    />
                  }
                  { ((!isEmail || !userExisted) || disposableEmail) && emailValue.length > 0 &&
                    <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" />
                  }
                </div>
                <div>
                  <input
                    className="Signup-removeOutline"
                    type={isPassword ? 'password' : 'text'}
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                    onFocus={() => this.setState({ focusPassword: true })}
                    onBlur={() => this.setState({ focusPassword: false })}
                    onChange={(e) => this.setState({
                      passwordValue: e.target.value,
                      showPasswordAnimation: e.target.value,
                    })}
                  />
                  <div className="Signup-showPasswordIcon">
                    <PasswordIcon
                      show={isPassword && true}
                      onToggle={(e) => {
                        e.preventDefault();
                        this.setState({ isPassword: !this.state.isPassword });
                      }}
                    />
                  </div>
                  <label htmlFor className={passwordAnimation}>Password</label>
                  { (passwordValue.length >= 6 || passwordValue.length === 0) && <div
                    style={{ backgroundColor: focusPassword ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  /> }
                  { passwordValue.length < 6 && passwordValue.length > 0 && <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" /> }
                </div>
                <button className="Signup-button">
                  <div className="Signup-buttonText"> Login </div>
                </button>
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            <div className="Signup-emailValidate">
              { ((!isEmail && emailValue.length > 0) || disposableEmail) && <div style={{ marginTop: '15px' }}>This is not a valid email address.</div> }
              { !userExisted && isEmail && !disposableEmail &&
                <span>
                  There is no user with that email. You can<a
                    style={{ color: '#ffaa00', textDecoration: 'none' }}
                    href={`${config.BASE_URL}/user/signup?email=${this.email && this.email.value}`}
                  > register </a>right away.
                </span>
              }
            </div>
            <span className="Signup-passwordValidate">
              { focusPassword ? 'Type 6 characters or more.' : null }
              { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 ? 'Type 6 characters or more.' : null }
            </span>
          </div>
        </div>
        <div className="Login-passwordContainer">
          <a className="Login-forgotPassword" href={`${config.BASE_URL}/user/forgot-password`}>
            <div style={{ minWidth: '105px', fontSize: '13px' }}>
              Forgor password?
            </div>
          </a>
          <div className={loginHaveAccountClassNames}>
            Don’t have an account? <a className="Login-getStarted" href={`${config.BASE_URL}/user/signup`}>Get started</a>
          </div>
        </div>
      </div>
    );
  }
}
