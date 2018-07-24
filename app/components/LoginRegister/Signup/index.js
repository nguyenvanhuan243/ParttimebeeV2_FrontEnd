import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import { Alert } from 'reactstrap';
import InvalidEmail from 'components/Icons/InvalidEmail/Loadable';
import validator from 'validator';
import classNames from 'classnames';
import TickIcon from 'components/Icons/TickIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

const WAIT_INTERVAL = 500;
const params = new URLSearchParams(location.search);
export default class Signup extends PureComponent {
  constructor() {
    super();
    this.state = {
      success: false,
      danger: false,
      focusEmail: false,
      focusPassword: false,
      showEmailAnimation: false,
      isPassword: true,
      shakeEffect: false,
      emailValue: '',
      passwordValue: '',
      isEmail: true,
      userExisted: true,
      timeOut: () => {},
      registerEmailState: params.get('email'),
    };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
    const { userExisted, isEmail } = this.state;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/users?email=${email}&password=${password}`;
    if (validator.isEmail(email) && password.length >= 6) {
      axios.post(url).then((response) => {
        if (response.status === 201) {
          this.setState({ success: true });
          localStorage.setItem('currentUser', response.data.id);
        }
      }).catch((error) => {
        this.setState({ danger: error.status === 422 });
      });
    }
    if (!email || !password || password.length < 6 || userExisted || !isEmail) {
      this.setState({ shakeEffect: true });
    }
    setTimeout(() => this.setState({ shakeEffect: false }), 200);
  }
  handleOnBlurEmail(e) {
    this.setState({
      focusEmail: false,
      showEmailAnimation: e.target.value,
      emailValue: e.target.value,
    });
  }
  handleOnchangeEmail(e) {
    const { timeOut } = this.state;
    clearTimeout(timeOut);
    const value = e.target.value;
    this.setState({
      showEmailAnimation: value,
      timeOut: setTimeout(() => {
        this.setState({ isEmail: validator.isEmail(value) });
        const url = `${config.API_BASE_URL}/users/check-user-exist`;
        axios.post(url, { email: value }).then((response) => {
          this.setState({ userExisted: response.data.success });
        });
      }, WAIT_INTERVAL),
    });
  }
  handleOnBlurPassword(e) {
    this.setState({
      focusPassword: false,
      showPasswordAnimation: e.target.value,
    });
  }
  handleOnchangePassword(e) {
    this.setState({
      passwordValue: e.target.value,
      showPasswordAnimation: !(e.target.value === ''),
    });
  }
  render() {
    const {
      success,
      danger,
      isEmail,
      focusEmail,
      userExisted,
      focusPassword,
      showEmailAnimation,
      showPasswordAnimation,
      isPassword,
      shakeEffect,
      emailValue,
      passwordValue,
      registerEmailState,
    } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    const passwordAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showPasswordAnimation,
      'Signup-animationColor': focusPassword,
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
            { success &&
              <Alert color="success">
                Your account has been registered, Please check email to confirm it.
              </Alert> }
            { (danger && !success) && <Alert color="danger">
              This email is used by a other user, Please use email has not been registered!
            </Alert> }
            <form onSubmit={this.onSubmit}>
              <div className="Signup-inputCustom">
                <div className="Signup-emailContainer">
                  <input
                    className="Signup-removeOutline"
                    type="text"
                    placeholder="Email"
                    value={registerEmailState}
                    ref={(ref) => (this.email = ref)}
                    onFocus={(e) => this.setState({ focusEmail: true, showEmailAnimation: e.target.value })}
                    onBlur={(e) => this.handleOnBlurEmail(e)}
                    onChange={(e) => {
                      this.handleOnchangeEmail(e);
                      this.setState({ registerEmailState: e.target.value });
                    }}
                  />
                  { !isEmail && emailValue.length > 0 &&
                  <div className="Signup-invalidEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">Invalid email :(</span>
                  </div> }
                  { isEmail && userExisted && emailValue.length > 0 &&
                  <div className="Signup-registeredEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">is registered</span>
                  </div> }
                  { !userExisted && isEmail &&
                  <div className="Signup-looksGoodEmail">
                    <TickIcon />
                    <span className="Signup-looksGoodText">looks good!</span>
                  </div> }
                  <label htmlFor className={emailAnimation}>Email</label>
                  { (!isEmail || (isEmail && userExisted)) && emailValue.length > 0 ?
                    <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" /> :
                    <div
                      style={{ 'background-color': focusEmail ? '#ffaa00' : '#e8e8e8' }}
                      className="Signup-separate"
                    />
                  }
                </div>
                <div>
                  <input
                    className="Signup-removeOutline"
                    type={isPassword ? 'password' : 'text'}
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                    onFocus={(e) => this.setState({ focusPassword: true, showPasswordAnimation: e.target.value })}
                    onBlur={(e) => this.handleOnBlurPassword(e)}
                    onChange={(e) => this.handleOnchangePassword(e)}
                  />
                  <div className="Signup-showPasswordIcon">
                    <PasswordIcon
                      show={isPassword}
                      onToggle={(e) => {
                        e.preventDefault();
                        this.setState({ isPassword: !this.state.isPassword });
                      }}
                    />
                  </div>
                  <label htmlFor className={passwordAnimation}>Password</label>
                  { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 && <div style={{ backgroundColor: '#da552f' }} className="Signup-separate" />}
                  { (passwordValue.length >= 6 || passwordValue.length === 0 || focusPassword) && <div
                    style={{ 'background-color': focusPassword ? '#ffaa00' : '#e8e8e8' }}
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
            { userExisted && isEmail && emailValue.length > 0 &&
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
              { focusEmail && !userExisted && isEmail &&
                'We’ll send an email to this address for verification.'
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
