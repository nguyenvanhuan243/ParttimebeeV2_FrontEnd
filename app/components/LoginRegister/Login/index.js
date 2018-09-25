import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import validator from 'validator';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { isMac } from '../../../utils/operatingSystem';
import config from '../../../../config';

const params = new URLSearchParams(location.search);
const checkUserExistUrl = `${config.API_BASE_URL}/users/check-user-exist`;
const disposableUrl = `${config.API_BASE_URL}/disposable-email/check`;
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
      showMessageEmailNotConfirm: false,
      loginEmailState: params.get('email'),
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const { disposableEmail, userExisted } = this.state;
    const url = `${config.API_BASE_URL}/sessions?email=${email}&password=${password}`;
    axios.post(checkUserExistUrl, { email }).then(response => {
      if (response.data.user && !response.data.user.email_confirmed) {
        this.setState({
          showMessageEmailNotConfirm: true,
        });
      } else {
        this.setState({
          showMessageEmailNotConfirm: false,
        });
      }
      if (response.data.user && response.data.user.email_confirmed) {
        if (validator.isEmail(email) && password.length >= 6 && !disposableEmail) {
          axios.post(url).then(responseInternal => {
            this.setState({ responseInternal: response === 201 });
            localStorage.setItem('currentUser', responseInternal.data.user.id);
            window.location.replace(`${config.BASE_URL}`);
          }).catch(error => {
            this.setState({ danger: error.responseInternal.status === 422 });
          });
        }
        if (!email || !password || !userExisted || password.length < 6) {
          this.setState({ shakeEffect: true });
        }
      } else {
        this.setState({ shakeEffect: true });
      }
    });
    setTimeout(() => this.setState({ shakeEffect: false }), 200);
  }

  handleOnBlurEmail = e => {
    const {
      target: {
        value = '',
      } = {},
    } = e;
    this.setState({
      focusEmail: false,
      emailValue: value,
    });
    if (!validator.isEmail(value)) {
      this.setState({ isEmail: false });
    } else {
      axios.post(checkUserExistUrl, { email: value }).then(response => {
        this.setState({ userExisted: response.data.success && true });
      });
      this.setState({ isEmail: true });
    }
    axios.post(disposableUrl, { email: value }).then(response => {
      this.setState({ disposableEmail: response.data.success });
    });
  }

  handleOnChangeEmail = e => {
    this.setState({
      loginEmailState: e.target.value,
      showEmailAnimation: e.target.value,
    });
  }

  handleOnChangePassword = e => {
    this.setState({
      passwordValue: e.target.value,
      showPasswordAnimation: e.target.value,
    });
  }

  handleOnToggle = e => {
    e.preventDefault();
    this.setState({ isPassword: !this.state.isPassword });
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
      showMessageEmailNotConfirm,
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
                    value={loginEmailState || ''}
                    ref={ref => (this.email = ref)}
                    onFocus={() => this.setState({ focusEmail: true })}
                    onBlur={this.handleOnBlurEmail}
                    onChange={this.handleOnChangeEmail}
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
                    ref={ref => (this.password = ref)}
                    onFocus={() => this.setState({ focusPassword: true })}
                    onBlur={() => this.setState({ focusPassword: false })}
                    onChange={this.handleOnChangePassword}
                  />
                  <div className="Signup-showPasswordIcon">
                    <PasswordIcon
                      show={isPassword}
                      onToggle={this.handleOnToggle}
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
              { !showMessageEmailNotConfirm && !userExisted && isEmail && !disposableEmail &&
                <span>
                  There is no user with that email. You can<Link
                    style={{ color: '#ffaa00', textDecoration: 'none' }}
                    to={`/user/signup?email=${this.email && this.email.value}`}
                  > register </Link>right away.
                </span>
              }
              { showMessageEmailNotConfirm &&
                'Check your email, we already sent an email to this address for verification.'
              }
            </div>
            <span className="Signup-passwordValidate">
              { passwordValue.length < 6 && passwordValue.length > 0 && 'Type 6 characters or more.' }
            </span>
          </div>
        </div>
        <div className="Login-passwordContainer">
          <Link className="Login-forgotPassword" to={'/user/forgot-password'}>
            <div style={{ minWidth: '105px', fontSize: '13px' }}>
              Forgor password?
            </div>
          </Link>
          <div className={loginHaveAccountClassNames}>
            Don’t have an account? <Link className="Login-getStarted" to={'/user/signup'}>Get started</Link>
          </div>
        </div>
      </div>
    );
  }
}
