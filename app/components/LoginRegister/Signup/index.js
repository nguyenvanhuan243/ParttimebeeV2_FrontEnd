import React, { PureComponent } from 'react';
import axios from 'axios';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
// import ShowPasswordIcon from 'components/LoginRegister/GeneralComponent/ShowPasswordIcon/Loadable';
import { Alert } from 'reactstrap';
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
    };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    const password = this.password.value;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/users?email=${email}&password=${password}`;
    if (email && password) {
      axios.post(url).then((response) => {
        if (response.status === 201) {
          this.setState({ success: true });
        }
      }).catch((error) => {
        if (error.response.status === 422) {
          this.setState({ danger: true });
        }
      });
    } else {
      this.setState({
        shakeEffect: !this.state.shakeEffect,
      });
    }
  }
  handleOnchangeEmail(e) {
    if (e.target.value === '') {
      this.setState({ showEmailAnimation: false });
    } else {
      this.setState({ showEmailAnimation: true });
    }
  }
  handleOnchangePassword(e) {
    if (e.target.value === '') {
      this.setState({ showPasswordAnimation: false });
    } else {
      this.setState({ showPasswordAnimation: true });
    }
  }
  render() {
    const { success, danger, focusEmail, focusPassword, showEmailAnimation, showPasswordAnimation, isPassword, shakeEffect } = this.state;
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
                <div>
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
                  {/* <ShowPasswordIcon
                    onToggle={(e) => {
                      e.preventDefault();
                      this.setState({ isPassword: !this.state.isPassword });
                    }}
                  /> */}
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
