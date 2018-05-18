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
import EmailIcon from 'components/Icons/Social/Email/Loadable';
export default class Email extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Email">
        <div className="Email-icon">
          <EmailIcon />
        </div>
        <div className="Email-text">
          EMAIL
        </div>
      </div>
    );
  }
}

