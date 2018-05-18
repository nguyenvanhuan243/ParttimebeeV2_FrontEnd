import React, { PureComponent } from 'react';

export default class ViewIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg height="16" width="16" viewBox="0 0 16 16">
        <g fill="#999" transform="translate(0 3)">
          <path d="M7.5 0C4.192 0 1.34 1.99.03 4.861a.334.334 0 0 0 0 .278C1.34 8.01 4.192 10 7.5 10s6.16-1.99 7.47-4.861a.334.334 0 0 0 0-.278C13.66 1.99 10.808 0 7.5 0zm0 8.45C5.632 8.45 4.12 6.905 4.12 5c0-1.905 1.513-3.449 3.38-3.449 1.868 0 3.38 1.545 3.38 3.45 0 1.904-1.513 3.45-3.38 3.45z" />
          <circle cx="7.5" cy="5" r="2" />
        </g>
      </svg>
    );
  }
}

