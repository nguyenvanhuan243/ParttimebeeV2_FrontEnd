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

import React, { Component, PropTypes } from 'react';
export default class GoogleAdsense extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { adsWidth = 250, adsHeight = 250 } = this.props;
    const adsStyle = {
      width: adsWidth,
      height: adsHeight,
      backgroundColor: '#d8d8d8',
    };
    return (
      <div style={adsStyle} className="GoogleAdsense">
      </div>
    );
  }
}
GoogleAdsense.propTypes = {
  adsWidth: PropTypes.number,
  adsHeight: PropTypes.number,
};
