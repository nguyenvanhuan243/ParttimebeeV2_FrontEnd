import React, { PureComponent } from 'react';
import axios from 'axios';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import ShowPasswordIcon from 'components/LoginRegister/GeneralComponent/ShowPasswordIcon/Loadable';
import { Alert } from 'reactstrap';
import config from '../../../../config';

export default class Signup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isSubmited: false,
      success: false,
      danger: false,
      focusEmail: false,
      focusPassword: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  // After 0.1s then Signup component will be rendered.
  componentWillMount() {
    setTimeout(
      () => {
        this.setState({
          isLoading: !this.state.isLoading,
        });
      },
      100
    );
  }
  onSubmit(e) {
    e.preventDefault();
    const url = `${config.API_BASE_URL}/users?email=${this.email.value}&password=${this.password.value}`;
    axios.post(url).then((response) => {
      if (response.status === 201) {
        this.setState({
          success: true,
        });
      }
    }).catch((error) => {
      if (error.response.status === 422) {
        this.setState({
          danger: true,
        });
      }
    });
  }
  handleFocusEmail() {
    this.setState({
      focusEmail: true,
    });
  }
  handleFocusOutEmail() {
    this.setState({
      focusEmail: false,
    })
  }
  handleFocusPassword() {
    this.setState({
      focusPassword: true,
    });
  }
  handleFocusOutPassword() {
    this.setState({
      focusPassword: false,
    })
  }
  render() {
    const {
      isLoading,
      success,
      danger,
      focusEmail,
      focusPassword,
    } = this.state;

    if (isLoading) {
      return null;
    }

    return (
      <div className="Signup">
        <DashlineIcon />
        <div className="Signup-title">
          Start posting jobs on Parttime Bee!
        </div>
        <div className="Signup-abstract">
          It’s Free!
        </div>
        <div className="Signup-form">
          <div className="FormComponent">
            {
              success ?
                <Alert color="success">
                  Your account has been registered, Please check email to confirm it.
                </Alert> : null
            }
            { (danger && !success) ? <Alert color="danger">
              This email is used by a other user, Please use email has not been registered!
            </Alert> : null }
            <form onSubmit={this.onSubmit}>
              <div className="FormComponent-inputCustom">
                <input
                  className="FormComponent-inputHoverEmail"
                  type="text"
                  placeholder="Email"
                  ref={(ref) => (this.email = ref)}
                  onFocus={() => this.handleFocusEmail()}
                  onBlur={() => this.handleFocusOutEmail()}
                />
                { focusEmail ?
                  <div className="FormComponent-separateColor" /> : 
                  <div className="FormComponent-separate" /> }
                <div className="FormComponent-placeHolderTop">
                  Password
                </div>
                <div className="FormComponent-passwordContainer">
                  <input
                    className="FormComponent-inputHover"
                    type="password"
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                    onFocus={() => this.handleFocusPassword()}
                    onBlur={() => this.handleFocusOutPassword()}
                  />
                  <ShowPasswordIcon />
                </div>
                { focusPassword ?
                  <div className="FormComponent-separateColor" /> : 
                  <div className="FormComponent-separate" /> }
                <button className="FormComponent-button">
                  <div className="FormComponent-buttonText">
                    Sign up FREE
                  </div>
                </button>
              </div>
            </form>
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
