import React, { PureComponent } from 'react';

export default class ShowMoreIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const showMoreIconStyle = {
      marginTop: '3',
      marginBotton: '3',
    };
    return (
      <svg style={showMoreIconStyle} height="6" width="10" viewBox="0 0 10 6">
        <path d="M1 1l4 4 4-4" fill="none" opacity=".4" stroke="#999" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }
}
