import React, { PureComponent } from 'react';
import classNames from 'classnames';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class ForgotPassword extends PureComponent {
  constructor() {
    super();
    this.state = { focusEmail: false, showEmailAnimation: false };
  }
  onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${config.API_BASE_URL}/users/reset-password`, {
      email: this.email.value,
    });
    location.replace(`${config.BASE_URL}/user/forgot-password-incoming`);
  }
  handleOnchangeEmail(e) {
    if (e.target.value === '') {
      this.setState({ showEmailAnimation: false });
    } else {
      this.setState({ showEmailAnimation: true });
    }
  }
  render() {
    const { focusEmail, showEmailAnimation } = this.state;
    const emailAnimation = classNames('Signup-inputLabel', {
      'Signup-inputAnimation': showEmailAnimation,
      'Signup-animationColor': focusEmail,
    });
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title"> Forgot your password? </div>
        <div className="ForgotPassword-abstract"> We`ll send you an email with a reset link. </div>
        <div className="Signup-form">
          <form onSubmit={this.onSubmit}>
            <div className="Signup-inputCustom">
              <div className="Signup-emailContainer">
                <input
                  className="Signup-inputHoverEmail"
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
                <div className="Signup-buttonText"> Reset password </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

