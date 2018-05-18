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
import FacebookIcon from 'components/Icons/Social/Facebook/Loadable';
export default class Facebook extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Facebook">
        <div className="Facebook-icon">
          <FacebookIcon />
        </div>
        <div className="Facebook-text">
          SHARE
        </div>
      </div>
    );
  }
}

