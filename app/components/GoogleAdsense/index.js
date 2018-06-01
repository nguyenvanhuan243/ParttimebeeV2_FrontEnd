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
