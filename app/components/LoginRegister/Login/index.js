import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import ShowPasswordIcon from 'components/LoginRegister/GeneralComponent/ShowPasswordIcon/Loadable';
import axios from 'axios';
import classNames from 'classnames';
import config from '../../../../config';

export default class Login extends PureComponent {
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
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const url = `${config.API_BASE_URL}/sessions?email=${this.email.value}&password=${this.password.value}`;
    axios.post(url).then((response) => {
      if (response.status === 201) {
        this.setState({
          success: true,
        });
      }
      localStorage.setItem('currentUser', response.data.user.id);
      window.location.replace(`${config.BASE_URL}`);
    }).catch((error) => {
      if (error.response.status === 422) {
        this.setState({
          danger: true,
        });
      }
    });
  }
  handleOnchangeEmail(e) {
    if (e.target.value === '') {
      this.setState({ showEmailAnimation: false });
    } else {
      this.setState({ showEmailAnimation: true });
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
    const {
      focusEmail,
      focusPassword,
      showEmailAnimation,
      showPasswordAnimation,
      isPassword,
      shakeEffect,
      passwordValue,
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
      <div className="Login">
        <DashlineIcon />
        <div className="Login-title"> Great to see you again! </div>
        <div className="Login-form">
          <div className="Login-container">
            <form onSubmit={this.onSubmit}>
              <div className={signUpClassname}>
                <div className="Signup-emailContainer">
                  <input
                    className="Signup-removeOutline"
                    type="email"
                    placeholder="Email"
                    ref={(ref) => (this.email = ref)}
                    onFocus={() => this.setState({ focusEmail: true })}
                    onBlur={() => this.setState({ focusEmail: false })}
                    onChange={(e) => this.handleOnchangeEmail(e)}
                  />
                  <label htmlFor className={emailAnimation}>Email</label>
                  <div className={focusEmail ? 'Signup-separateColor' : 'Signup-separate'} />
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
                  { passwordValue.length ? <div className="Signup-showPasswordIcon">
                    <ShowPasswordIcon
                      onToggle={(e) => {
                        e.preventDefault();
                        this.setState({ isPassword: !this.state.isPassword });
                      }}
                    />
                  </div> : null }
                  <label htmlFor className={passwordAnimation}>Password</label>
                  <div className={focusPassword ? 'Signup-separateColor' : 'Signup-separate'} />
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
        <div className="Login-passwordContainer">
          <div>
            <a className="Login-forgotPassword" href={`${config.BASE_URL}/user/forgot-password`}>
              Forgor password?
            </a>
          </div>
          <div className="Login-haveAccount">
            Don’t have an account? <a className="Login-getStarted" href={`${config.BASE_URL}/user/signup`}>Get started</a>
          </div>
        </div>
      </div>
    );
  }
}
