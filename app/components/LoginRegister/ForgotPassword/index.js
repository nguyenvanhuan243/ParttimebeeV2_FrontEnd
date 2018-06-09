import React, { PureComponent } from 'react';
import classNames from 'classnames';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class ForgotPassword extends PureComponent {
  constructor() {
    super();
    this.state = { focusEmail: false, showEmailAnimation: false, shakeEffect: false };
  }
  onSubmit = (e) => {
    const email = this.email.value;
    e.preventDefault();
    axios.post(`${config.API_BASE_URL}/users/reset-password`, {
      email,
    });
    if (email) {
      location.replace(`${config.BASE_URL}/user/forgot-password-incoming`);
    }
    if (!email) {
      this.setState({
        shakeEffect: !this.state.shakeEffect,
      });
    }
  }
  handleOnchangeEmail(e) {
    const email = this.email.value;
    if (!email) {
      this.setState({
        shakeEffect: !this.state.shakeEffect,
      });
    }
    if (email) {
      if (e.target.value === '') {
        this.setState({ showEmailAnimation: false });
      } else {
        this.setState({ showEmailAnimation: true });
      }
    }
  }
  render() {
    const { focusEmail, showEmailAnimation, shakeEffect } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    const signUpClassname = classNames('Signup-inputCustom', {
      'Signup-effectShake': shakeEffect,
    });
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title"> Forgot your password? </div>
        <div className="ForgotPassword-abstract"> We`ll send you an email with a reset link. </div>
        <div className="Signup-form">
          <div>
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
                <button className="Signup-button">
                  <div className="Signup-buttonText"> Reset Password </div>
                </button>
              </div>
            </form>
          </div>
          <div className="Signup-validateContainer">
            <span className="Signup-emailValidate">
              { focusEmail ? 'This email is not found in our system. Please enter again.' : null }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

