import React, { PureComponent } from 'react';
import axios from 'axios';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import { Alert } from 'reactstrap';
import InvalidEmail from 'components/Icons/InvalidEmail/Loadable';
import validator from 'validator';
import classNames from 'classnames';
import config from '../../../../config';

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
    };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/users?email=${email}&password=${password}`;
    if (validator.isEmail(email) && password) {
      axios.post(url).then((response) => {
        if (response.status === 201) {
          this.setState({ success: true });
          localStorage.setItem('currentUser', response.data.id);
        }
      }).catch((error) => {
        if (error.status === 422) {
          this.setState({ danger: true });
        }
      });
    }
    if (!email && !password) {
      this.setState({
        shakeEffect: !this.state.shakeEffect,
      });
    }
  }
  handleOnBlurEmail(e) {
    this.setState({
      focusEmail: false,
    });
    if (!e.target.value) {
      this.setState({
        showEmailAnimation: false,
      });
    }
  }
  handleOnchangeEmail(e) {
    if (e.target.value === '') {
      this.setState({ showEmailAnimation: false });
    } else {
      this.setState({ showEmailAnimation: true });
    }
    if (!validator.isEmail(e.target.value)) {
      this.setState({ isEmail: false });
    } else {
      this.setState({ isEmail: true });
    }
  }
  handleOnBlurPassword(e) {
    this.setState({
      focusPassword: false,
    });
    if (!e.target.value) {
      this.setState({
        showPasswordAnimation: false,
      });
    }
  }
  handleOnchangePassword(e) {
    this.setState({
      passwordValue: e.target.value,
    });
    if (e.target.value === '') {
      this.setState({ showPasswordAnimation: false });
    } else {
      this.setState({ showPasswordAnimation: true });
    }
  }
  render() {
    const { success, danger, focusEmail, focusPassword, showEmailAnimation, showPasswordAnimation, isPassword, shakeEffect, passwordValue } = this.state;
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
                    ref={(ref) => (this.email = ref)}
                    onFocus={() => this.setState({
                      focusEmail: true,
                      showEmailAnimation: true,
                    })}
                    onBlur={(e) => this.handleOnBlurEmail(e)}
                    onChange={(e) => this.handleOnchangeEmail(e)}
                  />
                  { !this.state.isEmail && <div className="Signup-invalidEmail">
                    <InvalidEmail />
                    <span className="Signup-invalidEmailText">
                      Invalid Email
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
                    onFocus={() => this.setState({
                      focusPassword: true,
                      showPasswordAnimation: true,
                    })}
                    onBlur={(e) => this.handleOnBlurPassword(e)}
                    onChange={(e) => this.handleOnchangePassword(e)}
                  />
                  { passwordValue.length ? <div className="Signup-showPasswordIcon">
                    <PasswordIcon
                      show={isPassword && true}
                      onToggle={(e) => {
                        e.preventDefault();
                        this.setState({ isPassword: !this.state.isPassword });
                      }}
                    />
                  </div> : null }
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
              { focusPassword ? 'Type 6 characters or more.' : null }
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
