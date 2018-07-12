import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import { Alert } from 'reactstrap';
import InvalidEmail from 'components/Icons/InvalidEmail/Loadable';
import validator from 'validator';
import classNames from 'classnames';
import axios from 'axios';
import config from '../../../../config';

const WAIT_INTERVAL = 1500;
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
      passwordValue: '',
      isEmail: true,
      timeOut: () => {},
      registerEmailState: params.get('email'),
    };
  }
  componentWillMount() {
    this.timer = null;
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
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
    if ((!email && !password) || password.length < 6) {
      this.setState({ shakeEffect: !this.state.shakeEffect });
    }
  }
  handleOnBlurEmail(e) {
    this.setState({ focusEmail: false, showEmailAnimation: e.target.value });
  }
  handleOnchangeEmail(e) {
    const { timeOut } = this.state;
    clearTimeout(timeOut);
    const value = e.target.value;
    this.setState({
      showEmailAnimation: value,
      timeOut: setTimeout(() => this.setState({ isEmail: validator.isEmail(value) }), WAIT_INTERVAL),
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
      focusEmail,
      focusPassword,
      showEmailAnimation,
      showPasswordAnimation,
      isPassword,
      shakeEffect,
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
    const signUpClassname = classNames('Signup-inputCustom', {
      'Signup-effectShake': shakeEffect,
    });

    return (
      <div className="Signup">
        <DashlineIcon />
        <div className="Signup-title"> Start posting jobs on Parttime Bee! </div>
        <div className="Signup-abstract"> It’s Free! </div>
        <div className="Signup-form">
          <div>
            { success &&
              <Alert color="success">
                Your account has been registered, Please check email to confirm it.
              </Alert> }
            { (danger && !success) && <Alert color="danger">
              This email is used by a other user, Please use email has not been registered!
            </Alert> }
            <form onSubmit={this.onSubmit}>
              <div className={signUpClassname}>
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
                  { !this.state.isEmail && <div className="Signup-invalidEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">
                      Invalid Email :(
                    </span>
                  </div> }
                  <label htmlFor className={emailAnimation}>Email</label>
                  <div
                    style={{ 'background-color': focusEmail ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  />
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
                  <div
                    style={{ 'background-color': focusPassword ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  />
                </div>
                <button className="Signup-button">
                  <div className="Signup-buttonText"> Sign up FREE </div>
                </button>
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            <span className="Signup-emailValidate">
              { focusEmail ? 'We’ll send an email to this address for verification.' : null }
            </span>
            <span className="Signup-passwordValidate">
              { focusPassword && 'Type 6 characters or more.' }
              { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 ? 'Type 6 characters or more.' : null }
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
