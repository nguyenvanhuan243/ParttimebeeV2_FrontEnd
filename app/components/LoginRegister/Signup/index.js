import React, { PureComponent } from 'react';
import axios from 'axios';
import validator from 'validator';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import TickIcon from 'components/Icons/TickIcon/Loadable';
import InvalidEmail from 'components/Icons/InvalidEmail/Loadable';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import config from '../../../../config';

const WAIT_INTERVAL = 1000;
const params = new URLSearchParams(location.search);
export default class Signup extends PureComponent {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      passwordValue: '',
      isEmail: true,
      finished: false,
      isPassword: true,
      focusEmail: false,
      userExisted: true,
      shakeEffect: false,
      focusPassword: false,
      disposableEmail: false,
      showEmailAnimation: false,
      timeOut: () => {},
      registerEmailState: params.get('email'),
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const { userExisted, isEmail, disposableEmail } = this.state;
    const url = `${config.API_BASE_URL}/users?email=${email}&password=${password}`;
    if (validator.isEmail(email) && password.length >= 6 && !disposableEmail) {
      axios.post(url).then(response => {
        if (response.status === 201) {
          location.replace(`${config.BASE_URL}/user/created-account`);
        }
      });
    }
    if (!email || !password || password.length < 6 || userExisted || !isEmail || disposableEmail) {
      this.setState({ shakeEffect: true });
    }
    setTimeout(() => this.setState({ shakeEffect: false }), 200);
  }

  handleOnBlurEmail = e => {
    const value = e.target.value;
    this.setState({
      focusEmail: false,
      emailValue: value,
      showEmailAnimation: value,
    });
    const disposableUrl = `${config.API_BASE_URL}/disposable-email/check`;
    axios.post(disposableUrl, { email: value }).then(response => {
      this.setState({ disposableEmail: response.data.success });
    });
  }

  handleOnchangeEmail = e => {
    const { timeOut } = this.state;
    clearTimeout(timeOut);
    const value = e.target.value;
    if (isEmpty(value)) {
      this.setState({ isEmail: true, finished: false });
    }
    if (value.length === 1) {
      this.setState({ isEmail: true, finished: false });
    }
    this.setState({ emailValue: value });
    this.setState({
      showEmailAnimation: value,
      registerEmailState: value,
      timeOut: setTimeout(() => {
        this.setState({ isEmail: validator.isEmail(value), finished: true });
        const disposableUrl = `${config.API_BASE_URL}/disposable-email/check`;
        axios.post(disposableUrl, { email: value }).then(response => {
          this.setState({ disposableEmail: response.data.success });
        });
      }, WAIT_INTERVAL),
    });
    const url = `${config.API_BASE_URL}/users/check-user-exist`;
    axios.post(url, { email: value }).then(response => {
      this.setState({ userExisted: response.data.success });
    });
  }

  handleOnBlurPassword = e => {
    this.setState({
      focusPassword: false,
      showPasswordAnimation: e.target.value,
    });
  }

  handleOnchangePassword = e => {
    const value = e.target.value;
    this.setState({
      passwordValue: value,
      showPasswordAnimation: !(value === ''),
    });
  }

  handleOnToggle = e => {
    e.preventDefault();
    this.setState({ isPassword: !this.state.isPassword });
  }

  handleOnFocusEmail = e => {
    this.setState({
      focusEmail: true,
      showEmailAnimation: e.target.value,
    });
  }

  handleOnFocusPassword = e => {
    this.setState({
      focusPassword: true,
      showPasswordAnimation: e.target.value,
    });
  }

  render() {
    const {
      isEmail,
      finished,
      isPassword,
      emailValue,
      focusEmail,
      userExisted,
      shakeEffect,
      passwordValue,
      focusPassword,
      disposableEmail,
      showEmailAnimation,
      registerEmailState,
      showPasswordAnimation,
    } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-animationColor': focusEmail,
      'Signup-inputAnimation': showEmailAnimation,
    });
    const passwordAnimation = classNames('Signup-inputLabel', {
      'Signup-animationColor': focusPassword,
      'Signup-inputAnimation': showPasswordAnimation,
    });
    const signupFormClassNames = classNames('Signup-form', {
      'Signup-effectShake': shakeEffect,
    });

    return (
      <div className="Signup">
        <DashlineIcon />
        <div className="Signup-title"> Start posting jobs on Parttime Bee! </div>
        <div className="Signup-abstract"> It’s Free! </div>
        <div className={signupFormClassNames}>
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="Signup-inputCustom">
                <div className="Signup-emailContainer">
                  <input
                    className="Signup-removeOutline"
                    type="text"
                    placeholder="Email"
                    value={registerEmailState || ''}
                    ref={ref => (this.email = ref)}
                    onFocus={this.handleOnFocusEmail}
                    onBlur={this.handleOnBlurEmail}
                    onChange={this.handleOnchangeEmail}
                  />
                  { emailValue.length > 0 && (!isEmail || disposableEmail) &&
                  <div className="Signup-invalidEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">Invalid email :(</span>
                  </div> }
                  { isEmail && userExisted && emailValue.length > 0 &&
                  <div className="Signup-registeredEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">is registered</span>
                  </div> }
                  { (emailValue.length > 0) && !userExisted && finished && isEmail && !disposableEmail &&
                  <div className="Signup-looksGoodEmail">
                    <TickIcon />
                    <span className="Signup-looksGoodText">looks good!</span>
                  </div> }
                  <label htmlFor className={emailAnimation}>Email</label>
                  { (!isEmail || (isEmail && userExisted) || disposableEmail) && emailValue.length > 0 ?
                    <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" /> :
                    <div
                      style={{ backgroundColor: focusEmail ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    />
                  }
                </div>
                <div>
                  <input
                    className="Signup-removeOutline"
                    type={isPassword ? 'password' : 'text'}
                    placeholder="Password"
                    ref={ref => (this.password = ref)}
                    onFocus={this.handleOnFocusPassword}
                    onBlur={this.handleOnBlurPassword}
                    onChange={this.handleOnchangePassword}
                  />
                  <div className="Signup-showPasswordIcon">
                    <PasswordIcon
                      show={isPassword}
                      onToggle={this.handleOnToggle}
                    />
                  </div>
                  <label htmlFor className={passwordAnimation}>Password</label>
                  { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 && <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" />}
                  { (passwordValue.length >= 6 || passwordValue.length === 0 || focusPassword) && <div
                    style={{ backgroundColor: focusPassword ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  />}
                </div>
                <button className="Signup-button">
                  <div className="Signup-buttonText"> Sign up FREE </div>
                </button>
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            { userExisted && isEmail && emailValue.length > 0 && disposableEmail &&
              <div className="Signup-emailValidate">
                <span>
                  Looks like you already have an account. You can<a
                    style={{ color: '#ffaa00', textDecoration: 'none' }}
                    href={`${config.BASE_URL}/user/login?email=${this.email && this.email.value}`}
                  > login from here </a>
                </span>
              </div>
            }
            <span className="Signup-emailValidate">
              { focusEmail && 'We’ll send an email to this address for verification.' }
              { disposableEmail && isEmail && !focusEmail &&
                <div style={{ marginTop: '15px' }}>
                  This is not valid email address.
                </div>
              }
            </span>
            <span className="Signup-passwordValidate">
              { (focusPassword || (!focusPassword && passwordValue.length < 6 && passwordValue.length > 0)) &&
                'Type 6 characters or more.' }
            </span>
          </div>
        </div>
        <div className="Signup-loginHere">
          Aready have an account?
          <a className="Signup-loginHereHref" href={`${config.BASE_URL}/user/login`}> Login here</a>
        </div>
        <div className="Signup-termService">
          By clicking ’Sign up FREE’, I agree to Parttime Bee’s
          <a href={`${config.BASE_URL}/pages/terms`} className="Signup-loginHereHref"> Term of Service</a>
        </div>
      </div>
    );
  }
}
