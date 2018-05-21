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

export default class PerlisIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        xmlSpace="preserve"
      >
        <image
          width={24}
          height={24}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,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
      RK5CYII="
        />
      </svg>
    );
  }
}

