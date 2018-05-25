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
import config from '../../../config';

export default class Footer extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Footer">
        <div className="Footer-information">
          <a href={`${config.BASE_URL}/pages/about`}>
            About
          </a>
          <div className="Footer-oval"></div>
          <a href={`${config.BASE_URL}/pages/about`}>
            Contact
          </a>
          <div className="Footer-oval"></div>
          <a href={`${config.BASE_URL}/pages/terms`}>
            Terms
          </a>
          <div className="Footer-oval"></div>
          <a href={`${config.BASE_URL}/pages/policy`}>
            Privacy
          </a>
        </div>
        <div className="Footer-copyRight">
          PARTTIME BEE © 2017
        </div>
      </div>
    );
  }
}
