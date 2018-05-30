import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import ShowPasswordIcon from 'components/LoginRegister/GeneralComponent/ShowPasswordIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class Login extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      success: false,
      danger: false,
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
  render() {
    return (
      <div className="Login">
        <DashlineIcon />
        <div className="Login-title">
          Great to see you again!
        </div>
        <div className="Login-form">
          <div className="Login-container">
            <form onSubmit={this.onSubmit}>
              <div className="Login-inputCustom">
                <input
                  className="Login-inputHoverEmail"
                  type="text"
                  placeholder="Email"
                  ref={(ref) => (this.email = ref)}
                />
                <div className="Login-separate" />
                <div className="Login-placeHolderTop">
                  Password
                </div>
                <div className="Login-inputPassContainer">
                  <input
                    className="Login-inputHover"
                    type="password"
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                  />
                  <ShowPasswordIcon />
                </div>
                <div className="Login-separateColor" />
                <button className="Login-button">
                  <div className="Login-buttonText">
                    Login
                  </div>
                </button>
              </div>
            </form>
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
