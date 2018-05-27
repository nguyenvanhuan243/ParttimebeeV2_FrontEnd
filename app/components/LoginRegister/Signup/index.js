import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';
import config from '../../../../config';

export default class Signup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
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
  render() {
    if (this.state.isLoading) {
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
          <FormComponent />
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
