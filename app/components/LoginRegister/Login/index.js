import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';
import axios from 'axios';
import validator from 'validator';
import classNames from 'classnames';
import config from '../../../../config';

const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      success: false,
      danger: false,
      isEmail: true,
      focusEmail: false,
      focusPassword: false,
      showEmailAnimation: false,
      isPassword: true,
      shakeEffect: false,
      passwordValue: '',
      userExisted: true,
    };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/sessions?email=${email}&password=${password}`;
    axios.post(url).then((response) => {
      this.setState({ success: response === 201 });
      localStorage.setItem('currentUser', response.data.user.id);
      window.location.replace(`${config.BASE_URL}`);
    }).catch((error) => {
      this.setState({ danger: error.response.status === 422 });
    });
    if (!email && !password) {
      this.setState({ shakeEffect: !this.state.shakeEffect });
    }
  }
  handleOnchangePassword(e) {
    this.setState({
      passwordValue: e.target.value,
      showPasswordAnimation: e.target.value !== '',
    });
  }
  render() {
    const {
      isEmail,
      focusEmail,
      focusPassword,
      showEmailAnimation,
      showPasswordAnimation,
      isPassword,
      shakeEffect,
      passwordValue,
      userExisted,
    } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    const passwordAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showPasswordAnimation,
      'Signup-animationColor': focusPassword,
    });
    const signUpClassNames = classNames('Signup-inputCustom', {
      'Signup-effectShake': shakeEffect,
    });
    const loginHaveAccountClassNames = classNames('Login-haveAccount', {
      'Login-haveAccountMacOs': isMac,
    });
    return (
      <div className="Login">
        <DashlineIcon />
        <div className="Login-title"> Great to see you again! </div>
        <div className="Login-form">
          <div className="Login-container">
            <form onSubmit={this.onSubmit}>
              <div className={signUpClassNames}>
                <div className="Signup-emailContainer">
                  <input
                    className="Signup-removeOutline"
                    type="text"
                    placeholder="Email"
                    ref={(ref) => (this.email = ref)}
                    onFocus={() => this.setState({ focusEmail: true })}
                    onBlur={(e) => {
                      this.setState({ focusEmail: false });
                      const email = e.target.value;
                      if (!validator.isEmail(email)) {
                        this.setState({ isEmail: false });
                      } else {
                        const url = `${config.API_BASE_URL}/users/check-user-exist`;
                        axios.post(url, { email: e.target.value }).then((response) => {
                          this.setState({ userExisted: response.data.success && true });
                        });
                        this.setState({ isEmail: true });
                      }
                    }}
                    onChange={(e) => this.setState({ showEmailAnimation: e.target.value !== '' })}
                  />
                  <label htmlFor className={emailAnimation}>Email</label>
                  <div
                    style={{ backgroundColor: focusEmail ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  />
                </div>
                <div>
                  <input
                    className="Signup-removeOutline"
                    type={isPassword ? 'password' : 'text'}
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                    onFocus={() => this.setState({ focusPassword: true })}
                    onBlur={() => this.setState({ focusPassword: false })}
                    onChange={(e) => this.handleOnchangePassword(e)}
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
                  <div
                    style={{ backgroundColor: focusPassword ? '#ffaa00' : '#e8e8e8' }}
                    className="Signup-separate"
                  />
                </div>
                <button className="Signup-button">
                  <div className="Signup-buttonText"> Login </div>
                </button>
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            { !isEmail && <span className="Signup-emailValidate" style={{ marginTop: '10px' }}>This is not a valid email address.</span> }
            { !userExisted && isEmail &&
              <span className="Signup-emailValidate">
                There is no user with that email. You can<a
                  style={{ color: '#ffaa00', textDecoration: 'none' }}
                  href={`${config.BASE_URL}/user/signup?email=${this.email.value}`}
                > register </a>right away.
              </span>
            }
            <span className="Signup-passwordValidate">
              { focusPassword ? 'Type 6 characters or more.' : null }
              { !focusPassword && passwordValue.length < 6 && passwordValue.length > 0 ? 'Type 6 characters or more.' : null }
            </span>
          </div>
        </div>
        <div className="Login-passwordContainer">
          <div>
            <a className="Login-forgotPassword" href={`${config.BASE_URL}/user/forgot-password`}>
              Forgor password?
            </a>
          </div>
          <div className={loginHaveAccountClassNames}>
            Don’t have an account? <a className="Login-getStarted" href={`${config.BASE_URL}/user/signup`}>Get started</a>
          </div>
        </div>
      </div>
    );
  }
}
