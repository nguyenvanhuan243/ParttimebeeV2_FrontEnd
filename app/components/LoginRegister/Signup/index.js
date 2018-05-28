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
    this.setState({
      isSubmited: !this.state.isSubmited,
    });
    axios.post(`${config.API_BASE_URL}/users?email=${this.email.value}&password=${this.password.value}`);
  }
  render() {
    const {
      isSubmited,
      isLoading,
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
              isSubmited ?
                <Alert color="success">
                  Your account has been registered, Please check email to confirm it.
                </Alert> : null
            }

            <form onSubmit={this.onSubmit}>
              <div className="FormComponent-inputCustom">
                <input
                  className="FormComponent-inputHoverEmail"
                  type="text"
                  placeholder="Email"
                  ref={(ref) => (this.email = ref)}
                />
                <div className="FormComponent-separate" />
                <div className="FormComponent-placeHolderTop">
                  Password
                </div>
                <div className="FormComponent-passwordContainer">
                  <input
                    className="FormComponent-inputHover"
                    type="password"
                    placeholder="Password"
                    ref={(ref) => (this.password = ref)}
                  />
                  <ShowPasswordIcon />
                </div>
                <div className="FormComponent-separateColor" />
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
