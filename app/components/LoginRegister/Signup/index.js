/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';

export default class Signup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Signup">
        <div className="Signup-dashlineIcon">
          <DashlineIcon />
        </div>
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
          <a className="Signup-loginHereHref" href=""> Login here</a>
        </div>
        <div className="Signup-termService">
          By clicking ’Sign up FREE’, I agree to Parttime Bee’s
          <a href="" className="Signup-loginHereHref"> Term of Service</a>
        </div>
      </div>
    );
  }
}
